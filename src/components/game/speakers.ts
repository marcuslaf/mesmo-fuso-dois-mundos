import type { PixelArt } from "@/components/game/PixelSprite";
import { FRAN, GALEGO, MARCUS, VALERIA } from "@/data/art/portraits";
import type { Speaker } from "@/lib/game/types";

export interface SpeakerStyle {
  label: string;
  nameClass: string;
  bubbleClass: string;
}

/**
 * Cores por speaker:
 * Marcus = terracota/quente · Valeria = azul/frio · sistema = púrpura do KC
 * narrador = cinza · fran = rosé · galego = neutro quente
 */
export const SPEAKER_STYLES: Record<Speaker, SpeakerStyle> = {
  narrador: {
    label: "Narrador",
    nameClass: "text-zinc-400",
    bubbleClass: "border-zinc-500/40 bg-zinc-800/70",
  },
  marcus: {
    label: "Marcus",
    nameClass: "text-orange-300",
    bubbleClass: "border-orange-400/40 bg-orange-950/50",
  },
  valeria: {
    label: "Valeria",
    nameClass: "text-sky-300",
    bubbleClass: "border-sky-400/40 bg-sky-950/50",
  },
  fran: {
    label: "Fran",
    nameClass: "text-rose-300",
    bubbleClass: "border-rose-400/40 bg-rose-950/50",
  },
  sistema: {
    label: "Sistema",
    nameClass: "text-purple-300",
    bubbleClass: "border-purple-400/40 bg-purple-950/50",
  },
  galego: {
    label: "Galego",
    nameClass: "text-stone-300",
    bubbleClass: "border-stone-400/40 bg-stone-800/70",
  },
};

/** Nickname usado no chat do KC (tela de reino). */
export const KC_NICKNAMES: Partial<Record<Speaker, string>> = {
  marcus: "Rei_Marcus",
  valeria: "Rainha_Valeria",
};

/**
 * Retrato pixel art por speaker. narrador e sistema não têm retrato
 * (usam ícones: livro e coroa).
 */
export const SPEAKER_PORTRAITS: Partial<Record<Speaker, PixelArt>> = {
  marcus: MARCUS,
  valeria: VALERIA,
  fran: FRAN,
  galego: GALEGO,
};
