"use client";

import { BookOpen, Crown } from "lucide-react";

import { PixelSprite } from "@/components/game/PixelSprite";
import { SPEAKER_PORTRAITS } from "@/components/game/speakers";
import type { Speaker } from "@/lib/game/types";

/**
 * Retrato do speaker: pixel art para personagens, ícone para narrador
 * (livro) e sistema (coroa). O retrato é quadrado (16×16 × scale).
 */
export function SpeakerPortrait({
  speaker,
  size = 48,
  className,
}: {
  speaker: Speaker;
  size?: number;
  className?: string;
}) {
  const art = SPEAKER_PORTRAITS[speaker];
  const scale = Math.max(2, Math.round(size / 16));

  if (art) {
    return (
      <PixelSprite
        art={art.art}
        palette={art.palette}
        scale={scale}
        className={className}
      />
    );
  }

  const Icon = speaker === "sistema" ? Crown : BookOpen;
  return (
    <Icon
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}