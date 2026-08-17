"use client";

import { DialogueSheet } from "@/components/game/DialogueSheet";
import type { SceneFrameProps } from "@/components/game/SceneRenderer";

/** Layout "single": fundo neutro/ambiental para narração simples. */
export function SingleScreen(props: SceneFrameProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-950 to-black">
      {/* Vinheta sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]"
      />
      <DialogueSheet {...props} />
    </div>
  );
}
