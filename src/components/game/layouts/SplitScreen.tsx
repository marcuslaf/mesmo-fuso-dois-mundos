"use client";

import { CloudRain, Moon, Sun } from "lucide-react";

import { DialogueSheet } from "@/components/game/DialogueSheet";
import { PixelSprite } from "@/components/game/PixelSprite";
import { BUENOS_AIRES, FORTALEZA } from "@/data/art/scenarios";
import type { SceneFrameProps } from "@/components/game/SceneRenderer";

/**
 * Layout "split": Fortaleza (quente) × Buenos Aires (frio) lado a lado.
 * Conforme o afeto sobe, a linha divisória "derrete" (fica translúcida).
 */
export function SplitScreen({ afeto, ...frame }: SceneFrameProps) {
  const melt = 1 - Math.max(0, Math.min(100, afeto)) / 100;

  return (
    <div className="absolute inset-0 grid grid-cols-2 overflow-hidden">
      {/* Fortaleza — quente */}
      <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden">
        <PixelSprite
          art={FORTALEZA.art}
          palette={FORTALEZA.palette}
          cover
          className="absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-orange-950/30 via-transparent to-orange-950/60"
        />
        <Sun className="relative z-10 size-12 text-yellow-100 drop-shadow-[0_0_12px_rgba(255,255,180,0.8)]" />
        <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-950/80">
          Fortaleza
        </span>
        <span className="relative z-10 text-[10px] text-orange-950/60">23:47</span>
      </div>

      {/* Buenos Aires — frio */}
      <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden">
        <PixelSprite
          art={BUENOS_AIRES.art}
          palette={BUENOS_AIRES.palette}
          cover
          className="absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70"
        />
        <Moon className="relative z-10 size-12 text-slate-200 drop-shadow-[0_0_12px_rgba(148,163,184,0.6)]" />
        <CloudRain className="relative z-10 size-6 text-slate-300/70" />
        <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200/80">
          Buenos Aires
        </span>
        <span className="relative z-10 text-[10px] text-slate-300/60">23:47</span>
      </div>

      {/* Divisória vertical — derrete conforme o afeto sobe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-opacity duration-700"
        style={{ opacity: melt }}
      />

      <DialogueSheet {...frame} />
    </div>
  );
}