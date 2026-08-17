"use client";

import { CloudRain, Moon, Sun } from "lucide-react";

import { DialogueSheet } from "@/components/game/DialogueSheet";
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
      <div className="relative flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-amber-200 via-orange-400 to-orange-900">
        <Sun className="size-12 text-yellow-100 drop-shadow-[0_0_12px_rgba(255,255,180,0.8)]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-950/70">
          Fortaleza
        </span>
        <span className="text-[10px] text-orange-950/50">23:47</span>
      </div>

      {/* Buenos Aires — frio */}
      <div className="relative flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-slate-700 via-blue-950 to-indigo-950">
        <Moon className="size-12 text-slate-200 drop-shadow-[0_0_12px_rgba(148,163,184,0.6)]" />
        <CloudRain className="size-6 text-slate-300/70" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-200/70">
          Buenos Aires
        </span>
        <span className="text-[10px] text-slate-300/50">23:47</span>
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
