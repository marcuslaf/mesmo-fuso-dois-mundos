import type { Scene } from "@/lib/game/types";

export const cena11: Scene = {
  id: "cena-1-1",
  title: "A fusão dos reinos",
  layout: "kc",
  lines: [
    {
      speaker: "narrador",
      text: "KC — um joguinho mobile de estratégia baseado em reinos de reis e rainhas. A sigla nunca foi explicada. E ninguém pergunta.",
    },
    {
      speaker: "narrador",
      text: "Fortaleza, 23h47. Marcus, 47 anos, dev junior recém-saído de uma transição de carreira, é rei de uma aliança pequena e envelhecida — veteranos que estavam desistindo do jogo.",
    },
    {
      speaker: "narrador",
      text: "Buenos Aires, 23h47. Mesmo fuso. Valeria, empresária em Buenos Aires, é a rainha da \"Coroa da Meia-Noite\" — o reino mais forte do servidor.",
    },
    {
      speaker: "valeria",
      text: "mi reino necesita veteranos que sepan de guerras. tu reino necesita gente que no se rinda.",
    },
    {
      speaker: "marcus",
      text: "e você quer o quê em troca, rainha?",
    },
    {
      speaker: "valeria",
      text: "una fusión. un solo reino. dos tronos.",
    },
    {
      speaker: "narrador",
      text: "O servidor coroa os dois: Rei Marcus e Rainha Valeria, co-regentes da Coroa da Meia-Noite.",
    },
    {
      speaker: "sistema",
      text: "⚔️ COROAÇÃO REAL — Rei_Marcus e Rainha_Valeria assumem o trono conjunto da Coroa da Meia-Noite.",
    },
    {
      speaker: "valeria",
      text: "mi ping es malo, pero mi orgullo es peor.",
    },
    {
      speaker: "marcus",
      text: "o importante é que o reino está de pé, não o teu orgulho.",
    },
    {
      speaker: "narrador",
      text: "Ela riu. Ele também. A primeira piada compartilhada do que ainda não sabiam ser uma história.",
    },
  ],
  choices: [
    {
      id: "piada",
      text: "Responder com uma piada.",
      reply: {
        speaker: "marcus",
        text: "Riso é o idioma mais fácil de falar à distância.",
      },
      effects: { afeto: 10, flags: { tom: "piada" } },
      next: "cena-1-2",
    },
    {
      id: "sinceridade",
      text: "Responder com sinceridade.",
      reply: {
        speaker: "marcus",
        text: "Faz tempo que eu não tinha alguém pra dividir um trono.",
      },
      effects: { afeto: 15, portunhol: 5, flags: { tom: "sincero" } },
      next: "cena-1-2",
    },
    {
      id: "fisico",
      text: "Responder com a foto do Galego dormindo no teclado.",
      reply: {
        speaker: "narrador",
        text: "Você manda a foto. O gato ronca. Ela não responde na hora — só depois de um minuto.",
      },
      effects: { distancia: 10, flags: { tom: "fisico" } },
      next: "cena-1-2",
    },
  ],
};
