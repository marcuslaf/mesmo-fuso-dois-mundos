"use client";

import { useEffect, useMemo, useState, type ComponentType } from "react";

import { KCScreen } from "@/components/game/layouts/KCScreen";
import { SingleScreen } from "@/components/game/layouts/SingleScreen";
import { SplitScreen } from "@/components/game/layouts/SplitScreen";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGame } from "@/lib/game/store";
import type { Choice, DialogueLine, Scene, SceneLayout } from "@/lib/game/types";

const TYPE_SPEED_MS = 25;

export interface SceneFrameProps {
  scene: Scene;
  /** afeto atual (usado pelo layout split para "derreter" a divisória) */
  afeto: number;
  /** linhas da cena + resposta pendente da escolha (se houver) */
  lines: DialogueLine[];
  lineIndex: number;
  charCount: number;
  typingDone: boolean;
  /** última linha completa e sem resposta pendente */
  showControls: boolean;
  onAdvance: () => void;
  onContinue: () => void;
  onChoose: (choice: Choice) => void;
}

const LAYOUTS: Record<SceneLayout, ComponentType<SceneFrameProps>> = {
  split: SplitScreen,
  kc: KCScreen,
  single: SingleScreen,
};

/**
 * Renderiza uma cena: máquina de escrever, avanço por toque,
 * escolhas e transição com fade entre cenas.
 */
export function SceneRenderer({ scene }: { scene: Scene }) {
  const { state, choose, advance, reset } = useGame();
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [pendingChoice, setPendingChoice] = useState<Choice | null>(null);

  // A escolha pode exibir uma linha de resposta antes de navegar.
  const pendingReply = pendingChoice?.reply ?? null;

  const lines = useMemo<DialogueLine[]>(
    () => (pendingReply ? [...scene.lines, pendingReply] : scene.lines),
    [scene.lines, pendingReply],
  );

  const safeLineIndex = Math.min(lineIndex, lines.length - 1);
  const currentLine = lines[safeLineIndex];
  const currentText = currentLine.text;
  const isLastLine = safeLineIndex >= lines.length - 1;
  const typingDone = charCount >= currentText.length;
  const lineComplete = isLastLine && typingDone;
  const showControls = lineComplete && !pendingReply;

  // Reinicia a digitação quando a linha atual muda (handlers abaixo
  // também zeram charCount nos pontos onde a linha troca).

  // Máquina de escrever: um caractere a cada 25ms.
  useEffect(() => {
    if (charCount >= currentText.length) return;
    const id = window.setTimeout(() => {
      setCharCount((c) => Math.min(c + 1, currentText.length));
    }, TYPE_SPEED_MS);
    return () => window.clearTimeout(id);
  }, [charCount, currentText]);

  const handleAdvance = () => {
    if (!typingDone) {
      // 1º toque: revela o texto completo.
      setCharCount(currentText.length);
      return;
    }
    if (pendingReply) {
      // 2º toque na resposta: aplica a escolha e navega.
      handleContinue();
      return;
    }
    if (!isLastLine) {
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }
  };

  const handleContinue = () => {
    if (pendingChoice) {
      const choice = pendingChoice;
      setPendingChoice(null);
      choose(choice);
      return;
    }
    if (scene.next && scene.next !== scene.id) {
      advance(scene.next);
    }
  };

  const handleChoose = (choice: Choice) => {
    if (choice.reply) {
      // A resposta vira a linha virtual atual (índice scene.lines.length).
      setPendingChoice(choice);
      setLineIndex(scene.lines.length);
      setCharCount(0);
      return;
    }
    choose(choice);
  };

  const Frame = LAYOUTS[scene.layout] ?? SingleScreen;
  // Convenção: next apontando para a própria cena = cena terminal (fim do protótipo).
  const isTerminal = showControls && !scene.choices && scene.next === scene.id;

  return (
    <div className="relative min-h-dvh overflow-hidden bg-zinc-950 text-zinc-50">
      <div
        key={`${scene.id}::${pendingReply ? "reply" : "scene"}`}
        className="absolute inset-0 animate-scene-in"
      >
        <Frame
          scene={scene}
          afeto={state.afeto}
          lines={lines}
          lineIndex={safeLineIndex}
          charCount={charCount}
          typingDone={typingDone}
          showControls={showControls}
          onAdvance={handleAdvance}
          onContinue={handleContinue}
          onChoose={handleChoose}
        />
      </div>

      {isTerminal ? <FinishCard onRestart={reset} /> : null}
    </div>
  );
}

function FinishCard({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-zinc-950/70 p-6 backdrop-blur-sm">
      <Card className="w-full max-w-sm text-center">
        <CardHeader className="items-center text-center">
          <CardTitle>Fim do protótipo</CardTitle>
          <CardDescription>Ato 1, Cena 2 em breve</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Obrigado por jogar a prévia de &quot;Mesmo Fuso, Dois Mundos&quot;.
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={onRestart} className="w-full">
            Recomeçar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
