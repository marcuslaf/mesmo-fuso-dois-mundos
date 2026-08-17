import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Cenários 32×20 (ou 32×24) para fundos de cena.
 * Cada linha deve ter exatamente 32 caracteres; ' ' e '.' são transparentes.
 */

/** Praia de Fortaleza ao entardecer: sol, mar, palmeira e areia. */
export const FORTALEZA: PixelArt = {
  art: [
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "SSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "SSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "SSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "BBBBBBBBBBBBBBBBBBBBBBllLLLllBBB",
    "BBBBBBBBBBBBBBBBBBBBBllLLLLlllBB",
    "BBBBBBBBBBBBBBBBBBBBllLLLLllllBB",
    "CCCCCCCCCCCCCCCCCCCCCCCCCPPCCCCC",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCPPCCCC",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCPPCCCC",
    "MMMMMMMMMMMMMMMMMMMMMMMMMPPMMMMM",
    "MWMWMWMWMWMWMWMWMWMWMWMWPPMWMWMW",
    "MMMMWMMMMMWMMMMMWMMMMMWMMMMWMMMM",
    "mmmmmmmmmmmmmmmmmmmmmmmmPPmmmmmm",
    "nnnnnnnnnnnnnnnnnnnnnnnnPPnnnnnn",
    "nnnnnnnnnnnnnnnnnnnnnnnnPPnnnnnn",
    "aaaaaaaaaaaaaaaaaaaaaaaaPPaaaaaa",
    "ababababababababababababPPababab",
  ],
  palette: {
    A: "#FFD98E", // céu alto
    B: "#F7A65A", // céu médio
    C: "#EF8A3C", // céu baixo
    S: "#FFF3C4", // sol
    M: "#7FD1D9", // mar claro
    m: "#2E8CA1", // mar médio
    n: "#1E6A80", // mar fundo
    W: "#EFFBFF", // espuma/ondas
    a: "#E0A05C", // areia clara
    b: "#C77E3E", // areia sombra
    P: "#6B4226", // tronco da palmeira
    L: "#4E8C3A", // folha clara
    l: "#2F5D24", // folha escura
  },
};

/** Buenos Aires à noite: prédios, janelas acesas, chuva e rua molhada. */
export const BUENOS_AIRES: PixelArt = {
  art: [
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMMMAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMmMAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMMMAAAAA",
    "AARAARAARAARAARAARAARAARAARAARAA",
    "ARAAARAAARAAARAAARAAARAAARAAARAA",
    "AARAARAARAARAARAARAARAARAARAARAA",
    "PPPPPPPPAAAAAAAAAAAAAAAAAAAAAAAA",
    "PPPPPPPPPPPPPPPPAAAAAAAAAAAAAAAA",
    "PPWWPPWWPPPPPPPPWWPPPPPPAAAAAAAA",
    "PPPPPPPPPPPPPPPPPPPPPPPPAAAAAAAA",
    "PPWWPPWWPPWWPPWWPPWWPPWWPPWWPPWW",
    "PRPRPRPRPRPRPRPRPRPRPRPRPRPRPRPR",
    "PPWWPPWWPPWWPPWWPPWWPPWWPPWWPPWW",
    "PRPRPRPRPRPRPRPRPRPRPRPRPRPRPRPR",
    "PPWWPPWWPPWWPPWWPPWWPPWWPPWWPPWW",
    "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
    "GRGRGRGRGRGRGRGRGRGRGRGRGRGRGRGR",
    "gggggggggggggggggggggggggggggggg",
  ],
  palette: {
    A: "#1E293B", // céu noite
    M: "#94A3B8", // lua
    m: "#CBD5E1", // lua brilho
    P: "#334155", // prédios
    W: "#FDE68A", // janelas acesas
    R: "#F87171", // chuva/reflexo
    G: "#111827", // rua
    g: "#1F2937", // rua clara
  },
};

/** Mapa do reino (KC): fundo púrpura, castelo dourado, rio, caminho e floresta. */
export const KC_MAP: PixelArt = {
  art: [
    "PPWPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
    "PpPpPpPpPpPpPpPpPpPpPpPpPpPpPpPp",
    "pPpPpPpPpPpPpPpPGGpPpPpPpPpPpPpP",
    "PpPpPpPpPpPpPpPpGGPpPpPpPpPpPpPp",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGgGGGGgGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGgGGgGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGgGGgGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGgGGgGGPPPPPPPPPPPP",
    "PPPPPPPPPPPPGGGGGGGGPPPPPPPPPPPP",
    "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
    "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    "FFTTTTTTTTTTTTTTTTTTTTTTTTTTTTFF",
    "ffttttttttttttttttttttttttttttff",
  ],
  palette: {
    P: "#2E1065", // fundo púrpura
    p: "#4C1D95", // púrpura médio
    W: "#FDE68A", // estrelas
    G: "#FBBF24", // castelo dourado
    g: "#B45309", // castelo sombra
    R: "#38BDF8", // rio
    r: "#0EA5E9", // rio claro
    T: "#6B7280", // caminho
    t: "#4B5563", // caminho escuro
    F: "#10B981", // floresta
    f: "#047857", // floresta escura
  },
};

/** Ambiente neutro para narração: noite estrelada com silhueta de cidade. */
export const AMBIENT: PixelArt = {
  art: [
    "ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAASAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMMMAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMmMAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAMMMAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAASAA",
    "AAAAASAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    "HHWHHWHHWHHWHHWHHWHHWHHWHHWHHWHH",
    "HWHHWHHWHHWHHWHHWHHWHHWHHWHHWHHH",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
  ],
  palette: {
    A: "#1C1917", // noite escura
    B: "#292524", // noite média
    C: "#44403C", // noite clara
    S: "#FDE68A", // estrelas
    M: "#E7E5E4", // lua
    m: "#A8A29E", // lua sombra
    H: "#0C0A09", // silhueta de prédios
    W: "#FDE68A", // janelas
  },
};