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
  // Escala baseada na largura real da arte (16×16, 24×24, ...).
  const cols = art?.art[0]?.length ?? 16;
  const scale = Math.max(2, Math.round(size / cols));

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