# Mesmo Fuso, Dois Mundos

Conto interativo (visual novel mobile-first) sobre Marcus — dev junior de 47 anos em Fortaleza-CE — e Valeria, dona de uma loja de instrumentos em Buenos Aires. Separados por 5.300 km e unidos pelo mesmo fuso horário (UTC-3), eles se conhecem como co-regentes da aliança "Coroa da Meia-Noite" dentro do jogo mobile de reinos chamado KC.

> O mesmo horário. Dois mundos. Um trono.

## Jogar

- **Produção (Vercel):** https://mesmo-fuso-dois-mundos.vercel.app
- **Local:** `pnpm dev` → http://localhost:3000

## O que já existe

- Motor narrativo genérico: cada cena é um dado tipado (`src/data/scenes/`), renderizado sem tocar em código
- Estado do jogo com variáveis (`afeto`, `distancia`, `portunhol`, `objeto`, `fran`, `flags`) e save automático em localStorage
- Três layouts visuais: chat do KC (reino púrpura/ouro), split-screen Fortaleza × Buenos Aires (a divisória "derrete" conforme o afeto) e narração
- Cena 1.1 "A fusão dos reinos" completa + cena 1.2 como início do Ato 2

## Roteiro (em desenvolvimento)

- **Ato 1 — O Encontro Digital:** fusão dos reinos, primeira chamada, o convite
- **Ato 2 — A Espera:** 90 dias de montagem, a primeira briga, o áudio de 2 minutos
- **Ato 3 — A Travessia:** a viagem, o encontro, o último dia
- **Finais:** 3 variações + 1 secreto ("O portunhol sem tradução")

## Stack

Next.js 16 (App Router) · React 19 · TypeScript estrito · Tailwind CSS v4 · shadcn/ui · lucide-react

## Desenvolvimento

```bash
pnpm dev      # servidor de desenvolvimento
pnpm build    # build de produção
pnpm lint     # lint
```
