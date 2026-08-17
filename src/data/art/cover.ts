import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Capa 48×30 estilo SNES 16-bit: metade esquerda = Fortaleza (quente),
 * metade direita = Buenos Aires (fria). A divisória vertical "derrete" no meio.
 * Cada linha deve ter exatamente 48 caracteres (24 + 24).
 */
export const COVER: PixelArt = {
  art: [
    "AAAAAAcNAAAAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "AAAAAAcNAAAAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "AAAAAAAAAAAAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "SSSAAAAAAAAAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "SSSAAAAkAkkAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "SSSAAAAAAkAAAAAAAAAAAAAA" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "BBBBBBBBBBBBBBBBBBBBllLL" + "FFFFFFFFFFFFFFFFFFFFFFFF",
    "BBBBBBBBBBBBBBBBBBBBllLl" + "FRFRFRFRFRFRFRFRFRFRFRFR",
    "CCCCCCCCCCCCCCCCCCCCPPCC" + "URURURURURURURURURURURUR",
    "CCCCCCCCCCCCCCCCCCCCPPCC" + "UUUUUUUUUUUUUUUUUUUUUUUU",
    "MMMMSSSSSSSSSSSSSSSSPPMM" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "MMMMSSSSSSSSSSSSSSSSPPMM" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "MWMWMWMWMWMWMWMWMWMWPPMM" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "mmmmmmmmmmmmmmmmmmmmPPmm" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "mmmmmmmmmmmmmmmmmmmmPPmm" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "nnnnnnnnnnnnnnnnnnnnPPnn" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "SSSaaaaaaaaaaaaaaaaaPPaa" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "SSSaaaaaaaaaaaaaaaaaPPaa" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "ababababababababababPPab" + "WWUYUYUYUYUYUYUYUYUYUYUY",
    "bbbbbbbbbbbbbbbbbbbbPPbb" + "WWUUUUUUUUUUUUUUUUUUUUUU",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "GGGGGGGGGGGGGGGGGGGGGGGG",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "GGGGGGGGGGGGGGGGGGGGGGGG",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
    "bbbbbbbbbbbbbbbbbbbbbbbb" + "gggggggggggggggggggggggg",
  ],
  palette: {
    A: "#FFE29A", // céu quente alto
    B: "#FFA94D", // céu quente médio
    C: "#F78A3C", // céu quente baixo
    S: "#FFF6D6", // sol e reflexo
    c: "#FFF0C0", // nuvens
    N: "#E8C890", // nuvens sombra
    k: "#5A3A1E", // pássaros
    M: "#8FE0E8", // mar claro
    m: "#3AA0B8", // mar médio
    n: "#227890", // mar fundo
    W: "#F2FCFF", // espuma/divisória derretida
    a: "#F0B070", // areia clara
    b: "#D08A48", // areia sombra
    P: "#7A4E2A", // tronco da palmeira
    L: "#5AA844", // folha clara
    l: "#336B28", // folha escura
    F: "#1E293B", // céu frio
    U: "#3B4A63", // prédios
    Y: "#FDE68A", // janelas acesas
    R: "#F87171", // chuva
    G: "#111827", // rua
    g: "#1F2937", // rua clara
  },
};