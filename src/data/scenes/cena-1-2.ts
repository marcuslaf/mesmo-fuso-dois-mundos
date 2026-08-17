import type { Scene } from "@/lib/game/types";

export const cena12: Scene = {
  id: "cena-1-2",
  title: "Primeira chamada, primeiro silêncio",
  layout: "split",
  lines: [
    {
      speaker: "narrador",
      text: "Madrugada em Fortaleza. Madrugada em Buenos Aires. A primeira ligação de voz.",
    },
    {
      speaker: "marcus",
      text: "alô... rainha?",
    },
    {
      speaker: "valeria",
      text: "¿sos vos? no te reconozco sin el escudo.",
    },
    {
      speaker: "narrador",
      text: "O sotaque travou os dois. O portunhol começava — e com ele, uma rotina.",
    },
  ],
  // next aponta para si mesma: convenção de cena terminal (fim do protótipo)
  next: "cena-1-2",
};
