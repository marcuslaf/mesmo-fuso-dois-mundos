"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SPEAKER_STYLES } from "@/components/game/speakers";
import type { SceneFrameProps } from "@/components/game/SceneRenderer";

type SheetProps = Omit<SceneFrameProps, "afeto">;

/** Cursor de digitação. */
export function TypeCursor() {
  return (
    <span
      aria-hidden="true"
      className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded-sm bg-zinc-300/80 align-middle"
    />
  );
}

/**
 * Bottom sheet padrão de diálogo (visual novel): nome do speaker,
 * texto com máquina de escrever, toque para avançar e controles.
 * Usado pelos layouts split e single.
 */
export function DialogueSheet({
  scene,
  lines,
  lineIndex,
  charCount,
  typingDone,
  showControls,
  onAdvance,
  onContinue,
  onChoose,
}: SheetProps) {
  const line = lines[lineIndex];
  const style = SPEAKER_STYLES[line.speaker];
  const typed = line.text.slice(0, charCount);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-4 pb-5">
      {showControls && scene.choices && scene.choices.length > 0 ? (
        <div className="pointer-events-auto flex flex-col gap-2">
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
      ) : null}

      {showControls && scene.next && scene.next !== scene.id ? (
        <div className="pointer-events-auto flex justify-end">
          <Button variant="secondary" onClick={onContinue}>
            Continuar
            <ChevronRight />
          </Button>
        </div>
      ) : null}

      <button
        type="button"
        onClick={onAdvance}
        aria-label={typingDone ? "Avançar diálogo" : "Revelar texto completo"}
        className="pointer-events-auto w-full rounded-t-2xl border border-white/10 bg-zinc-950/85 p-4 text-left shadow-2xl backdrop-blur-md"
      >
        <span
          className={`mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${style.nameClass}`}
        >
          {style.label}
        </span>
        <p className="text-[15px] leading-relaxed text-zinc-100">
          {typed}
          {!typingDone ? <TypeCursor /> : null}
        </p>
      </button>
    </div>
  );
}
