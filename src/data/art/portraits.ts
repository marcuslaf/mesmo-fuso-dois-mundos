import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Retratos 24×24 dos personagens, estilo visual novel retrô.
 * Cada linha deve ter exatamente 24 caracteres; ' ' e '.' são transparentes.
 * Luz vinda da esquerda: sombras caem no lado direito.
 */

export const MARCUS: PixelArt = {
  art: [
    "......HHHHHHHHHHHH......",
    ".....HHHHHHHHHHHHHH.....",
    "....HHHHHHHHHHHHHHHH....",
    "....HHHHHHHHHHHHHHHH....",
    "....HHHWWWHHHHWWWHHH....",
    "....HHWWWWWHHHWWWWWHH...",
    "....HHHHHHHHHHHHHHHH....",
    "....HHSSSSSSSSSSSSHH....",
    "....HSSSSSSSSSSSSSsH....",
    "....HSSSSSSSSSSSSSsH....",
    "....HSSgGGEEGGGGgSSH....",
    "....HSSgGGEEGGGGgSSH....",
    "....HSSgGGGGGGGGgSSH....",
    "....HSSSSSSSSSSSSSsH....",
    "....HSSSSSSSSSSSSSsH....",
    "....HSSSSSSRRSSSSSSH....",
    "....HSSbbbbbbbbbbSSH....",
    "....HHSSbbbbbbbbSSHH....",
    ".....HHSSSSSSSSSSHH.....",
    ".....HHHSSSSSSSSHHH.....",
    "....ccccccccccccccCC....",
    "...ccccccccccccccccCC...",
    "..ccccccccccccccccccCC..",
    "..ccccccccccccccccccCC..",
  ],
  palette: {
    H: "#1A1D24", // cabelo preto
    W: "#AEB4BE", // mechas brancas (grisalhas)
    S: "#E0AC69", // pele
    s: "#C98F52", // pele sombra
    g: "#3F4A5A", // moldura dos óculos
    G: "#A9C1E0", // vidro dos óculos
    E: "#2B2F36", // olhos
    R: "#B0555A", // boca
    b: "#9C948D", // barba rala
    c: "#C2703D", // camisa terracota
    C: "#9A4E2A", // camisa sombra
  },
};

export const VALERIA: PixelArt = {
  art: [
    "....HHHHHHHHHHHHHHHH....",
    "...HHHHHHHHHHHHHHHHHH...",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHSSSSSSSSSSSSHHHH..",
    "..HHHSSSSSSSSSSSSSsHHH..",
    "..HHHSSSSSSSSSSSSSsHHH..",
    "..HHHSSEEEEEEEEESSSHHH..",
    "..HHHSSEEEEEEEEESSSHHH..",
    "..HHHSSSSSSSSSSSSSSHHH..",
    "..HHHSSSSSSSSSSSSSSHHH..",
    "..HHHSSSSSSSSSSSSSsHHH..",
    "..HHHSSSSSSSSSSSSSsHHH..",
    "..HHHSSSSSRRRRSSSSSHHH..",
    "..HHHSSSSSSSSSSSSSSHHH..",
    "..HHHHSSSSSSSSSSSSHHHH..",
    "...HHHHSSSSSSSSSSHHHH...",
    "...HHHHHSSSSSSSSHHHHH...",
    "..DDLLLLLLLLLLLLLLLLll..",
    "..DLLLLLLLLLLLLLLLLLLl..",
    "..LLLLLLLLLLLLLLLLLLll..",
    "..LLLLLLLLLLLLLLLLLLll..",
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
    l: "#1D4ED8", // blusa sombra
  },
};

export const FRAN: PixelArt = {
  art: [
    "....HHHHHHHHHHHHHHHH....",
    "...HHHHHHHHHHHHHHHHHH...",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHhh..",
    "..HHHHHHHHHHHHHHHHHHHH..",
    "..HHHHHSSSSSSSSSSHHHHH..",
    "..HHHHSSSSSSSSSSSsHHHH..",
    "..HHHHSSSSSSSSSSSsHHHH..",
    "..HHHHSSEEEEEEEESSSHHH..",
    "..HHHHSSEEEEEEEESSSHHH..",
    "..HHHHSSSSSSSSSSSSHHHH..",
    "..HHHHSSSSSSSSSSSsHHHH..",
    "..HHHHSSSSSSSSSSSsHHHH..",
    "..HHHHSSSSSRRRRSSSHHHH..",
    "..HHHHSSSSSSSSSSSSHHHH..",
    "..HHHHHSSSSSSSSSSHHHHH..",
    "...HHHHHSSSSSSSSHHHHH...",
    "...HHHHHHSSSSSSHHHHHH...",
    "..UUUUUUUUUUUUUUUUUUuu..",
    "..UUUUUUUUUUUUUUUUUUuu..",
    "..UUUUUUUUUUUUUUUUUUuu..",
    "..UUUUUUUUUUUUUUUUUUuu..",
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
    "..oOOo..........oOOo....",
    "..oOOOo........oOOOo....",
    "...oOOOOooooooOOOOo.....",
    "...oOOOOOOOOOOOOOOo.....",
    "..oOOOOOOOOOOOOOOOOo....",
    "..oODOOOOOOOOOOOOODo....",
    "..oODEEEEEEEEEEEEEDo....",
    "..oODEEEEEEEEEEEEEDo....",
    "..oOOOOOOOOOOOOOOOOo....",
    "..oOOOODDDDDDDDOOOOo....",
    "..oOOOODDDDDDDDOOOOo....",
    "...oOOOOWWWWWWOOOo......",
    "...oOOOOWNNNNWOOOo......",
    "...oOOOOWWWWWWOOOo......",
    "....oOOOOOOOOOOOOo......",
    "....oOOOOOOOOOOOOo......",
    "....oOOOOOOOOOOOOo......",
    ".....oOOOOOOOOOOo.......",
    ".....oOOOOOOOOOOo.......",
    "......oooooooooo........",
    "........................",
    "........................",
    "........................",
    "........................",
  ],
  palette: {
    O: "#E8A33D", // laranja
    o: "#C77E22", // laranja sombra
    D: "#7A4E14", // listras tabby
    E: "#7DB84D", // olhos verdes
    W: "#F5EFE6", // focinho/bigodes
    N: "#E88A8A", // nariz rosado
  },
};