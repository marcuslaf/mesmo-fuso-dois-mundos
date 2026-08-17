import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Retratos 32×32 dos personagens, estilo visual novel retrô.
 * Cada linha deve ter exatamente 32 caracteres; ' ' e '.' são transparentes.
 * Luz vinda da esquerda: sombras caem no lado direito.
 */

export const MARCUS: PixelArt = {
  art: [
    "........HHHHHHHHHHHHHHHH........",
    ".......HHHHHHHHHHHHHHHHHH.......",
    "......HHHHHHHHHHHHHHHHHHHH......",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    ".....HHHWWWHHHHHHHHHHWWWHHH.....",
    ".....HHWWWWWHHHHHHHHHWWWWWHH....",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    ".....HHSSSSSSSSSSSSSSSSSSHH.....",
    ".....HSSSSSSSSSSSSSSSSSSSsH.....",
    ".....HSSSSSSSSSSSSSSSSSSSsH.....",
    ".....HSSgGGGGEEGGGGGGGGgSSH.....",
    ".....HSSgGGGGEEGGGGGGGGgSSH.....",
    ".....HSSgGGGGGGGGGGGGGGgSSH.....",
    ".....HSSSSSSSSSSSSSSSSSSSsH.....",
    ".....HSSSSSSSSSSSSSSSSSSSsH.....",
    ".....HSSSSSSSSSSSSSSSSSSSsH.....",
    ".....HSSSSSSSSRRRRSSSSSSSSH.....",
    ".....HSSbbbbbbbbbbbbbbbbSSH.....",
    ".....HHSSbbbbbbbbbbbbbbSSHH.....",
    "......HHSSSSSSSSSSSSSSSSSSHH....",
    ".......HHSSSSSSSSSSSSSSSSHH.....",
    ".......HHHSSSSSSSSSSSSSSHHH.....",
    "......ccccccccccccccccccccCC....",
    ".....ccccccccccccccccccccccCC...",
    "....ccccccccccccccccccccccccCC..",
    "...ccccccccccccccccccccccccccCC.",
    "..ccccccccccccccccccccccccccCCCC",
    "..ccccccccccccccccccccccccccCCCC",
    "..ccccccccccccccccccccccccccCCCC",
    "..ccccccccccccccccccccccccccCCCC",
  ],
  palette: {
    H: "#14161C", // cabelo preto
    W: "#C0C6D0", // mechas brancas (grisalhas)
    S: "#F0B878", // pele
    s: "#D89A52", // pele sombra
    g: "#2E3A4A", // moldura dos óculos
    G: "#B8D0EC", // vidro dos óculos
    E: "#20242C", // olhos
    R: "#C05A5E", // boca
    b: "#A8A098", // barba rala
    c: "#E07A3C", // camisa terracota
    C: "#B05A28", // camisa sombra
  },
};

export const VALERIA: PixelArt = {
  art: [
    "......HHHHHHHHHHHHHHHHHHHH......",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHSSSSSSSSSSSSSSSSHHHH....",
    "....HHHSSSSSSSSSSSSSSSSsHHHH....",
    "....HHHSSSSSSSSSSSSSSSSsHHHH....",
    "....HHHSSEEEEEEEEEEEEESSSHHH....",
    "....HHHSSEEEEEEEEEEEEESSSHHH....",
    "....HHHSSSSSSSSSSSSSSSSsHHHH....",
    "....HHHSSSSSSSSSSSSSSSSsHHHH....",
    "....DHHSSSSSSSSSSSSSSSSSSHHD....",
    "....DHHSSSSSSSSSSSSSSSSSSHHD....",
    "....HHHSSSSSSSSSSSSSSSSSSHHH....",
    "....HHHSSSSSSSSSSSSSSSSSSHHH....",
    "....HHHSSSSSSSRRRRRRSSSSSHHH....",
    "....HHHSSSSSSSSSSSSSSSSSSHHH....",
    "....HHHHSSSSSSSSSSSSSSSSHHHH....",
    ".....HHHHSSSSSSSSSSSSSSHHHH.....",
    ".....HHHHHSSSSSSSSSSSSHHHHH.....",
    "....DDLLLLLLLLLLLLLLLLLLLLll....",
    "....DLLLLLLLLLLLLLLLLLLLLLLl....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
    "....LLLLLLLLLLLLLLLLLLLLLLll....",
  ],
  palette: {
    H: "#14161C", // cabelo preto puro
    h: "#2E3440", // cabelo sombra (preto azulado)
    S: "#F2C08C", // pele
    s: "#D09A5E", // pele sombra
    E: "#14161C", // olhos
    D: "#FFD54A", // brinco dourado
    R: "#C05A5E", // lábios
    L: "#3B82F6", // blusa azul
    l: "#1D4ED8", // blusa sombra
  },
};

export const FRAN: PixelArt = {
  art: [
    "......HHHHHHHHHHHHHHHHHHHH......",
    ".....HHHHHHHHHHHHHHHHHHHHHH.....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHHHHHHHHHHHHHHHHHHhh....",
    "....HHHHHSSSSSSSSSSSSSSSHHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSEEEEEEEEEEEESSSHHH....",
    "....HHHHSSEEEEEEEEEEEESSSHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSSSSSSSSSSSSSsSHHHH....",
    "....HHHHSSSSSSSRRRRSSSSSHHHH....",
    "....HHHHSSSSSSSSSSSSSSSSHHHH....",
    "....HHHHHSSSSSSSSSSSSSSSHHHH....",
    ".....HHHHHSSSSSSSSSSSSSHHHH.....",
    ".....HHHHHHSSSSSSSSSSSHHHHH.....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
    "....UUUUUUUUUUUUUUUUUUUUUUuu....",
  ],
  palette: {
    H: "#4A3B32", // cabelo castanho
    h: "#6B5546", // mechas
    S: "#F2C08C", // pele
    s: "#D09A5E", // pele sombra
    E: "#3D2B20", // olhos
    R: "#C05A5E", // boca
    U: "#F59E0B", // hoodie
    u: "#B45309", // hoodie sombra
  },
};

export const GALEGO: PixelArt = {
  art: [
    "....oOOOo..........oOOOo......",
    "....oOOOOo........oOOOOo......",
    ".....oOOOOooooooOOOOo.........",
    ".....oOOOOOOOOOOOOOOOo........",
    "....oOOOOOOOOOOOOOOOOOo.......",
    "....oODOOOOOOOOOOOOOOODo......",
    "....oODEEEEEEEEEEEEEEEDo......",
    "....oODEEEEEEEEEEEEEEEDo......",
    "....oOOOOOOOOOOOOOOOOOo.......",
    "....oOOOODDDDDDDDDDOOOOo......",
    "....oOOOODDDDDDDDDDOOOOo......",
    ".....oOOOOWWWWWWWWOOOo........",
    ".....oOOOOWNNNNNNWOOOo........",
    ".....oOOOOWWWWWWWWOOOo........",
    "......oOOOOOOOOOOOOOOo........",
    "......oOOOOOOOOOOOOOOo........",
    "......oOOOOOOOOOOOOOOo........",
    ".......oOOOOOOOOOOOOo.........",
    ".......oOOOOOOOOOOOOo.........",
    "........oooooooooooo..........",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
    "..............................",
  ],
  palette: {
    O: "#F5A623", // laranja
    o: "#D97E1E", // laranja sombra
    D: "#8A5A1A", // listras tabby
    E: "#7DB84D", // olhos verdes
    W: "#FDF6EC", // focinho/bigodes
    N: "#F08A8A", // nariz rosado
  },
};