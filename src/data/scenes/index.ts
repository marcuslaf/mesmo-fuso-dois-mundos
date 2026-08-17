import type { Scene } from "@/lib/game/types";

import { cena11 } from "./cena-1-1";
import { cena12 } from "./cena-1-2";

const scenes: Record<string, Scene> = {
  [cena11.id]: cena11,
  [cena12.id]: cena12,
};

export function getScene(sceneId: string): Scene | undefined {
  return scenes[sceneId];
}

export const INITIAL_SCENE_ID = cena11.id;
