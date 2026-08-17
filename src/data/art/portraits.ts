import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Retratos 16×16 dos personagens, estilo visual novel retrô.
 * Cada linha deve ter exatamente 16 caracteres; ' ' e '.' são transparentes.
 */

export const MARCUS: PixelArt = {
  art: [
    "................",
    "....hhhhhHhH....",
    "...HhHHhhHHhH...",
    "...HHhhhHHhHh...",
    "...hhSSSSSShh...",
    "...hSSSSSSSSh...",
    "...hSgGGGgSSh...",
    "..hSSgGGGgSSS...",
    "..SSSSSSSSSS....",
    "..SSsSSSsSSS....",
    "..SSsssssSSS....",
    "..SSbbbSbbbS....",
    "..SSbbbbbbbS....",
    "..SSbbbbbbbS....",
    "...ccccccccc....",
    "..ccccccccccc...",
  ],
  palette: {
    h: "#1A1D24", // cabelo preto
    H: "#AEB4BE", // mechas brancas (grisalhas)
    S: "#E0AC69", // pele
    s: "#C98F52", // pele sombra
    g: "#3F4A5A", // moldura dos óculos
    G: "#A9C1E0", // vidro dos óculos
    b: "#9C948D", // barba rala
    c: "#C2703D", // camisa terracota
  },
};

export const VALERIA: PixelArt = {
  art: [
    "................",
    "....HHHHHHHH....",
    "...HhHHHHHHhH...",
    "...HhHHHHHHhH...",
    "...HHSSSSSSHH...",
    "..HHHSSSSSSHHH..",
    "..HHSEESSEESHH..",
    "..HHSSSSSSSSHH..",
    ".HHHSSSSSSSSHHH.",
    ".HHDSSsSSsSSDHH.",
    ".HHSSSSSSSSSSHH.",
    ".HHSSSRRRRSSSHH.",
    ".HHSSSSSSSSSSHH.",
    "hHHHLLLLLLLLHHHh",
    "hHHHLLLLLLLLHHHh",
    "hhhhLLLLLLLLhhhh",
  ],
  palette: {
    H: "#1A1D24", // cabelo preto puro
    h: "#2E3440", // cabelo sombra (preto azulado)
    S: "#E8B98A", // pele
    s: "#C9945F", // pele sombra
    E: "#1A1D24", // olhos
    D: "#F5C542", // brinco dourado
    R: "#B0555A", // lábios
    L: "#3B82F6", // blusa azul
  },
};

export const FRAN: PixelArt = {
  art: [
    "................",
    "..HHHHHHHHHHHH..",
    "..HhHHHHHHHHhH..",
    "..HhHHSSSSHHhH..",
    "..HHHSSSSSSHHH..",
    "..HHSEESSEESHH..",
    "..HHSSSSSSSSHH..",
    "..HSSSSSSSSSSH..",
    "...SSSSSSSSSS...",
    "...SSsSSsSSS....",
    "....SSSRRSS.....",
    "..UU.SSSS.UU....",
    "..UU.SSSS.UU....",
    "..UUUUUUUUUU....",
    "..UUUuUUuUUU....",
    "..UUUUUUUUUU....",
  ],
  palette: {
    H: "#4A3B32", // cabelo castanho
    h: "#6B5546", // mechas
    S: "#E8B98A", // pele
    s: "#C9945F", // pele sombra
    E: "#3D2B20", // olhos
    R: "#B0555A", // boca
    U: "#D97706", // hoodie
    u: "#92400E", // hoodie sombra
  },
};

export const GALEGO: PixelArt = {
  art: [
    "................",
    "..D..........D..",
    "..Do........oD..",
    "...oOOooooOOo...",
    "..oOOOOOOOOOOo..",
    "..oODOOOOOOODo..",
    "..oODEEEEEEDOo..",
    "..oODEEEEEEDOo..",
    "..WOOOOOOOOOOW..",
    "..oOOOWWOOOo....",
    "..oOOOWWOOOo....",
    "...oOO....OOo...",
    "...oOOOOOOOOo...",
    "..ooOOOOOOOOoo..",
    "..oOOOOOOOOOOo..",
    "..oooOOOOOOooo..",
  ],
  palette: {
    O: "#E8A33D", // laranja
    o: "#C77E22", // laranja sombra
    D: "#7A4E14", // listras tabby
    E: "#7DB84D", // olhos verdes
    W: "#F5EFE6", // focinho/bigodes
  },
};