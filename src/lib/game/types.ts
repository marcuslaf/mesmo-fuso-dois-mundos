export type Speaker = "narrador" | "marcus" | "valeria" | "fran" | "sistema" | "galego";

export type SceneLayout = "split" | "kc" | "single";

export interface GameState {
  /** 0-100 (tom das escolhas) */
  afeto: number;
  /** 0-100 (quanto a ausência pesa) */
  distancia: number;
  /** 0-100 (nível de compreensão mútua) */
  portunhol: number;
  /** item simbólico (escolhido na Cena 2.3) */
  objeto: string | null;
  /** progressão do filho */
  fran: number;
  /** flags booleanas ou rótulos (ex: tom: "piada") */
  flags: Record<string, string | boolean>;
  currentScene: string;
}

export type StateEffects = Partial<Omit<GameState, "flags">> & {
  flags?: Record<string, string | boolean>;
};

export interface DialogueLine {
  speaker: Speaker;
  text: string;
}

export interface Choice {
  id: string;
  text: string;
  /**
   * Linha exibida após a escolha, antes de avançar (opcional).
   * Extensão do tipo original: o texto falado pelo jogador não estava
   * previsto, mas é essencial para o roteiro das escolhas da Cena 1.1.
   */
  reply?: DialogueLine;
  effects?: StateEffects;
  next: string; // scene id
}

export interface Scene {
  id: string;
  title: string;
  layout: SceneLayout;
  lines: DialogueLine[];
  choices?: Choice[];
  next?: string; // próxima cena automática (se não houver escolhas)
  onEnter?: StateEffects;
}
