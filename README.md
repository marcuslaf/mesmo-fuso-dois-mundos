# Mesmo Fuso, Dois Mundos
# Same Timezone, Two Worlds

**Conto interativo (visual novel mobile-first) sobre Marcus — dev junior de 47 anos em Fortaleza-CE — e Valeria, empresária em Buenos Aires. Separados por 5.300 km e unidos pelo mesmo fuso horário (UTC-3), eles se conhecem como co-regentes da aliança "Coroa da Meia-Noite" dentro do jogo mobile de reinos chamado KC.**

**Interactive story (mobile-first visual novel) about Marcus — a 47-year-old junior dev in Fortaleza, Brazil — and Valeria, a businesswoman in Buenos Aires. 5,300 km apart and united by the same timezone (UTC-3), they meet as co-rulers of the "Midnight Crown" alliance inside a kingdom mobile game called KC.**

> O mesmo horário. Dois mundos. Um trono.
> Same time. Two worlds. One throne.

---

## Links

| Recurso / Resource | URL |
|---|---|
| Site (Vercel) | https://mesmo-fuso-dois-mundos.vercel.app |
| GitHub | https://github.com/marcuslaf/mesmo-fuso-dois-mundos |

## Stack | Stack

| Camada / Layer | Tecnologia / Technology |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui |
| Linguagem / Language | TypeScript (estrito / strict) |
| Ícones / Icons | lucide-react |
| Deploy | Vercel |

## O que já existe | What's implemented

- Motor narrativo genérico: cada cena é um dado tipado (`src/data/scenes/`), renderizado sem tocar em código / Generic narrative engine: every scene is a typed data file (`src/data/scenes/`), rendered without touching code
- Estado do jogo com variáveis (`afeto`, `distancia`, `portunhol`, `objeto`, `fran`, `flags`) e save automático em localStorage / Game state with variables (`afeto`, `distancia`, `portunhol`, `objeto`, `fran`, `flags`) and automatic localStorage save
- Três layouts visuais: chat do KC (reino púrpura/ouro), split-screen Fortaleza × Buenos Aires (a divisória "derrete" conforme o afeto) e narração / Three visual layouts: KC chat (purple/gold kingdom), Fortaleza × Buenos Aires split-screen (the divider "melts" as affection grows) and narration
- Cena 1.1 "A fusão dos reinos" completa + cena 1.2 como início do Ato 2 / Scene 1.1 "The union of kingdoms" complete + scene 1.2 as the start of Act 2

## Roteiro | Script (em desenvolvimento / in development)

- **Ato 1 — O Encontro Digital / The Digital Meeting:** fusão dos reinos, primeira chamada, o convite / union of kingdoms, first call, the invitation
- **Ato 2 — A Espera / The Wait:** 90 dias de montagem, a primeira briga, o áudio de 2 minutos / 90-day montage, the first fight, the 2-minute voice note
- **Ato 3 — A Travessia / The Crossing:** a viagem, o encontro, o último dia / the trip, the meeting, the last day
- **Finais / Endings:** 3 variações + 1 secreto ("O portunhol sem tradução") / 3 variations + 1 secret ("Portunhol without translation")

## Como começar | Getting Started

```bash
# Clone
git clone https://github.com/marcuslaf/mesmo-fuso-dois-mundos.git
cd mesmo-fuso-dois-mundos

# Instalar dependências / Install dependencies
pnpm install

# Desenvolvimento / Development
pnpm dev

# Build produção / Production build
pnpm build

# Lint
pnpm lint
```

## Autor | Author

**Marcus Lafaiete** — [@marcuslaf](https://github.com/marcuslaf)

---

<div align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge"/>
</div>
