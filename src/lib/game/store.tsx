"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { getScene } from "@/data/scenes";
import type { Choice, GameState, StateEffects } from "@/lib/game/types";

const STORAGE_KEY = "mf2m-game-state";

const clamp = (value: number, min = 0, max = 100) =>
  Math.min(max, Math.max(min, value));

export const INITIAL_STATE: GameState = {
  afeto: 30,
  distancia: 20,
  portunhol: 10,
  objeto: null,
  fran: 0,
  flags: {},
  currentScene: "cena-1-1",
};

/** Aplica efeitos como deltas sobre o estado atual (ex: afeto +10). */
function applyEffects(state: GameState, effects?: StateEffects): GameState {
  if (!effects) return state;

  const next: GameState = { ...state };

  if (typeof effects.afeto === "number") {
    next.afeto = clamp(state.afeto + effects.afeto);
  }
  if (typeof effects.distancia === "number") {
    next.distancia = clamp(state.distancia + effects.distancia);
  }
  if (typeof effects.portunhol === "number") {
    next.portunhol = clamp(state.portunhol + effects.portunhol);
  }
  if (typeof effects.fran === "number") {
    next.fran = clamp(state.fran + effects.fran);
  }
  if (typeof effects.objeto === "string") {
    next.objeto = effects.objeto;
  }
  if (effects.flags) {
    next.flags = { ...state.flags, ...effects.flags };
  }

  return next;
}

/** Sanitiza um save corrompido/antigo antes de aplicar no estado. */
function sanitize(partial: unknown): GameState {
  if (!partial || typeof partial !== "object") return INITIAL_STATE;

  const raw = partial as Partial<GameState>;

  return {
    afeto: clamp(typeof raw.afeto === "number" ? raw.afeto : INITIAL_STATE.afeto),
    distancia: clamp(
      typeof raw.distancia === "number" ? raw.distancia : INITIAL_STATE.distancia,
    ),
    portunhol: clamp(
      typeof raw.portunhol === "number" ? raw.portunhol : INITIAL_STATE.portunhol,
    ),
    objeto: typeof raw.objeto === "string" ? raw.objeto : null,
    fran: clamp(typeof raw.fran === "number" ? raw.fran : INITIAL_STATE.fran),
    flags:
      raw.flags && typeof raw.flags === "object" ? { ...raw.flags } : {},
    currentScene:
      typeof raw.currentScene === "string" && getScene(raw.currentScene)
        ? raw.currentScene
        : INITIAL_STATE.currentScene,
  };
}

/** Lê o save do localStorage (lazy init do estado). SSR retorna INITIAL_STATE. */
function readInitialState(): GameState {
  if (typeof window === "undefined") return INITIAL_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return sanitize(JSON.parse(raw) as unknown);
  } catch {
    // save corrompido ou storage indisponível — começa do zero
  }
  return INITIAL_STATE;
}

/** Verifica se existe um save (lazy init do flag hasSave). */
function readHasSave(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

interface GameContextValue {
  state: GameState;
  hasSave: boolean;
  /** true somente após a hidratação (evita piscar "Continuar" no SSR). */
  hydrated: boolean;
  /** Muda de cena e aplica o onEnter da cena de destino. */
  advance: (sceneId: string) => void;
  /** Aplica os efeitos da escolha e navega para choice.next. */
  choose: (choice: Choice) => void;
  /** Volta ao estado inicial (cena-1-1). */
  reset: () => void;
}

const GameContext = createContext<GameContextValue | null>(null);

const emptySubscribe = () => () => {};

export function GameProvider({ children }: { children: ReactNode }) {
  // snapshot do servidor (false) durante SSR/hidratação, true depois.
  const hydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Estado inicial lido do localStorage no client (lazy init).
  const [state, setState] = useState<GameState>(readInitialState);
  const [hasSave, setHasSave] = useState<boolean>(readHasSave);

  // Persiste a cada mudança de estado (após a hidratação).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // modo privado / storage cheio — jogo continua apenas em memória
    }
  }, [state, hydrated]);

  const advance = useCallback((sceneId: string) => {
    setState((s) => {
      const scene = getScene(sceneId);
      if (!scene) return s;
      return applyEffects({ ...s, currentScene: sceneId }, scene.onEnter);
    });
  }, []);

  const choose = useCallback((choice: Choice) => {
    setState((s) => {
      const withEffects = applyEffects(s, choice.effects);
      const scene = getScene(choice.next);
      if (!scene) return withEffects;
      return applyEffects(
        { ...withEffects, currentScene: choice.next },
        scene.onEnter,
      );
    });
  }, []);

  const reset = useCallback(() => {
    setState(() => {
      const scene = getScene(INITIAL_STATE.currentScene);
      return applyEffects({ ...INITIAL_STATE }, scene?.onEnter);
    });
    setHasSave(false);
  }, []);

  const value = useMemo<GameContextValue>(
    () => ({ state, hasSave, hydrated, advance, choose, reset }),
    [state, hasSave, hydrated, advance, choose, reset],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame deve ser usado dentro de <GameProvider>");
  }
  return ctx;
}
