import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Capa 40×24: metade esquerda = Fortaleza (quente), metade direita =
 * Buenos Aires (fria). A divisória vertical "derrete" no meio.
 * Cada linha deve ter exatamente 40 caracteres.
 */
export const COVER: PixelArt = {
  art: [
    "AAAAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "AAAAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "AAAAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "SSSAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "SSSAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "SSSAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNN",
    "BBBBBBBBBBBBBBllLLLllBBBNNNNNNNNNNNNNNNN",
    "BBBBBBBBBBBBBBllLLLLlBBBNRNRNRNRNRNRNRNR",
    "CCCCCCCCCCCCCCCCPPCCCCURURURURURURURURUR",
    "CCCCCCCCCCCCCCCCPPCCCCUUUUUUUUUUUUUUUUUU",
    "MMMMSSSSSSSSSSSSSSPPMMWWUYUYUYUYUYUYUYUY",
    "MMMMSSSSSSSSSSSSSSPPMMWWUYUYUYUYUYUYUYUY",
    "MWMWMWMWMWMWMWMWPPMMUYUYUYUYUYUYUYUYUYUY",
    "mmmmmmmmmmmmmmmmPPmmWWUYUYUYUYUYUYUYUYUY",
    "mmmmmmmmmmmmmmmmPPmmWWUYUYUYUYUYUYUYUYUY",
    "nnnnnnnnnnnnnnnnPPnnWWUYUYUYUYUYUYUYUYUY",
    "aaaaaaaaaaaaaaaaPPaaWWUYUYUYUYUYUYUYUYUY",
    "aaaaaaaaaaaaaaaaPPaaWWUYUYUYUYUYUYUYUYUY",
    "ababababababababPPabUYUYUYUYUYUYUYUYUYUY",
    "bbbbbbbbbbbbbbbbPPbbUUUUUUUUUUUUUUUUUUUU",
    "bbbbbbbbbbbbbbbbPPbbGGGGGGGGGGGGGGGGGGGG",
    "bbbbbbbbbbbbbbbbPPbbGGGGGGGGGGGGGGGGGGGG",
    "bbbbbbbbbbbbbbbbPPbbgggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbPPbbgggggggggggggggggggg",
  ],
  palette: {
    A: "#FFD98E", // céu quente alto
    B: "#F7A65A", // céu quente médio
    C: "#EF8A3C", // céu quente baixo
    S: "#FFF3C4", // sol
    M: "#7FD1D9", // mar claro
    m: "#2E8CA1", // mar médio
    n: "#1E6A80", // mar fundo
    W: "#EFFBFF", // espuma/divisória derretida
    a: "#E0A05C", // areia clara
    b: "#C77E3E", // areia sombra
    P: "#6B4226", // tronco da palmeira
    L: "#4E8C3A", // folha clara
    l: "#2F5D24", // folha escura
    N: "#1E293B", // céu frio
    U: "#334155", // prédios
    Y: "#FDE68A", // janelas acesas
    R: "#F87171", // chuva
    G: "#111827", // rua
    g: "#1F2937", // rua clara
  },
};