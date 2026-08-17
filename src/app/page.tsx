"use client";

import { useState } from "react";
import { Moon, Play, RotateCcw, Sun } from "lucide-react";

import { PixelSprite } from "@/components/game/PixelSprite";
import { SceneRenderer } from "@/components/game/SceneRenderer";
import { Button } from "@/components/ui/button";
import { COVER } from "@/data/art/cover";
import { getScene } from "@/data/scenes";
import { useGame } from "@/lib/game/store";

export default function Home() {
  const { state, reset, hasSave, hydrated } = useGame();
  const [started, setStarted] = useState(false);

  const scene = getScene(state.currentScene);

  const handleStart = () => {
    reset();
    setStarted(true);
  };

  const handleContinue = () => {
    setStarted(true);
  };

  const handleRestart = () => {
    reset();
    setStarted(false);
  };

  if (!started) {
    return (
      <TitleScreen
        canContinue={hydrated && hasSave}
        onStart={handleStart}
        onContinue={handleContinue}
      />
    );
  }

  if (!scene) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-zinc-950 p-6 text-center text-sm text-zinc-400">
        <p>Cena &quot;{state.currentScene}&quot; não encontrada.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-zinc-950 text-zinc-50">
      <SceneRenderer key={scene.id} scene={scene} />
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-2 z-30 text-zinc-400 hover:text-zinc-200"
        onClick={handleRestart}
      >
        <RotateCcw className="size-3.5" />
        Recomeçar
      </Button>
    </main>
  );
}

function TitleScreen({
  canContinue,
  onStart,
  onContinue,
}: {
  canContinue: boolean;
  onStart: () => void;
  onContinue: () => void;
}) {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-10 overflow-hidden bg-zinc-950 px-6 text-center text-zinc-50">
      {/* Capa pixel art: Fortaleza × Buenos Aires */}
      <PixelSprite
        art={COVER.art}
        palette={COVER.palette}
        cover
        className="absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/90"
      />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3 text-amber-300/80">
          <Sun className="size-6" />
          <Moon className="size-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Mesmo Fuso,
            <br />
            Dois Mundos
          </h1>
          <p className="mt-2 text-sm text-zinc-400">um conto interativo</p>
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-xs flex-col gap-3">
        <Button size="lg" className="w-full" onClick={onStart}>
          <Play />
          Começar
        </Button>
        {canContinue ? (
          <Button variant="outline" size="lg" className="w-full" onClick={onContinue}>
            Continuar
          </Button>
        ) : null}
      </div>

      <p className="relative z-10 max-w-xs text-xs leading-relaxed text-zinc-500">
        Marcus, em Fortaleza. Valeria, em Buenos Aires. Mesmo fuso. Dois mundos.
        Um trono.
      </p>
    </main>
  );
}
