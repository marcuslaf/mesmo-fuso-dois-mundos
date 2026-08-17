"use client";

import { useEffect, useRef } from "react";
import { Crown, Landmark, Shield } from "lucide-react";

import { PixelSprite } from "@/components/game/PixelSprite";
import { SpeakerPortrait } from "@/components/game/SpeakerPortrait";
import { TypeCursor } from "@/components/game/DialogueSheet";
import { KC_NICKNAMES, SPEAKER_STYLES } from "@/components/game/speakers";
import { Button } from "@/components/ui/button";
import { KC_MAP } from "@/data/art/scenarios";
import type { SceneFrameProps } from "@/components/game/SceneRenderer";
import type { Speaker } from "@/lib/game/types";

/**
 * Layout "kc": tela do jogo de reino (KC). Diálogo em bolhas de chat,
 * com nicknames Rei_Marcus / Rainha_Valeria, barra da aliança e "mapa".
 */
export function KCScreen({
  scene,
  lines,
  lineIndex,
  charCount,
  typingDone,
  showControls,
  onAdvance,
  onContinue,
  onChoose,
}: SceneFrameProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mantém o chat colado na última mensagem enquanto digita.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lineIndex, charCount]);

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-amber-950">
      {/* Mapa do reino ao fundo, escurecido para legibilidade */}
      <PixelSprite
        art={KC_MAP.art}
        palette={KC_MAP.palette}
        cover
        className="absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-950/60 to-purple-950/90"
      />

      {/* Barra da aliança */}
      <header className="relative flex items-center justify-center gap-2 border-b border-amber-400/20 bg-purple-950/80 px-4 py-2.5 backdrop-blur-sm">
        <Crown className="size-4 text-amber-300" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
          Coroa da Meia-Noite
        </span>
      </header>

      {/* Mapa do reino */}
      <div className="relative px-4 pt-3">
        <div className="overflow-hidden rounded-xl border border-amber-400/25 bg-purple-900/40 backdrop-blur-sm">
          <PixelSprite
            art={KC_MAP.art}
            palette={KC_MAP.palette}
            cover
            className="absolute inset-0 opacity-25"
          />
          <div className="relative flex items-center justify-between gap-2 p-3">
            <div className="flex items-center gap-2 text-amber-200/90">
              <Landmark className="size-4" />
              <Shield className="size-4" />
              <span className="text-[10px] font-medium uppercase tracking-widest text-amber-200/70">
                Mapa do Reino
              </span>
            </div>
            <span className="rounded-full border border-amber-400/30 px-2 py-0.5 text-[10px] text-amber-100/80">
              Servidor UTC-3
            </span>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div
        ref={scrollRef}
        onClick={showControls ? undefined : onAdvance}
        className="relative flex-1 cursor-pointer overflow-y-auto px-4 py-4"
      >
        <div className="flex flex-col gap-3">
          {lines.slice(0, lineIndex + 1).map((line, i) => {
            const isCurrent = i === lineIndex;
            const typed = isCurrent ? line.text.slice(0, charCount) : line.text;
            const cursor = isCurrent && !typingDone ? <TypeCursor /> : null;

            if (line.speaker === "narrador") {
              return (
                <p
                  key={i}
                  className="mx-auto max-w-[92%] text-center text-xs italic leading-relaxed text-purple-100/60"
                >
                  {typed}
                  {cursor}
                </p>
              );
            }

            if (line.speaker === "sistema") {
              return (
                <div
                  key={i}
                  className="mx-auto max-w-[92%] rounded-lg border border-purple-400/30 bg-purple-950/60 px-3 py-2 text-center text-xs font-medium text-purple-200"
                >
                  {typed}
                  {cursor}
                </div>
              );
            }

            const nick =
              KC_NICKNAMES[line.speaker as Speaker] ?? SPEAKER_STYLES[line.speaker].label;
            const isValeria = line.speaker === "valeria";
            const style = SPEAKER_STYLES[line.speaker];

            return (
              <div
                key={i}
                className={`flex gap-2 ${isValeria ? "flex-row-reverse" : ""}`}
              >
                <SpeakerPortrait
                  speaker={line.speaker}
                  size={40}
                  className="mt-0.5 shrink-0"
                />
                <div
                  className={`flex flex-col ${isValeria ? "items-end" : "items-start"}`}
                >
                  <span className={`mb-0.5 px-1 text-[10px] font-semibold ${style.nameClass}`}>
                    {nick}
                  </span>
                  <div
                    className={`max-w-[85%] rounded-2xl border px-3 py-2 text-sm leading-relaxed text-zinc-100 ${style.bubbleClass} ${
                      isValeria ? "rounded-br-sm" : "rounded-bl-sm"
                    }`}
                  >
                    {typed}
                    {cursor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controles inferiores */}
      <div className="border-t border-white/10 bg-purple-950/70 p-3 backdrop-blur-sm">
        {showControls && scene.choices && scene.choices.length > 0 ? (
          <div className="flex flex-col gap-2">
            {scene.choices.map((choice) => (
              <Button
                key={choice.id}
                variant="outline"
                className="w-full justify-start whitespace-normal text-left"
                onClick={() => onChoose(choice)}
              >
                {choice.text}
              </Button>
            ))}
          </div>
        ) : showControls && scene.next && scene.next !== scene.id ? (
          <Button variant="secondary" className="w-full" onClick={onContinue}>
            Continuar
          </Button>
        ) : (
          <button
            type="button"
            onClick={onAdvance}
            className="w-full py-1 text-center text-xs text-purple-200/70"
          >
            {typingDone ? "toque para continuar ▸" : "▸"}
          </button>
        )}
      </div>
    </div>
  );
}
