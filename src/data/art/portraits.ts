import type { PixelArt } from "@/components/game/PixelSprite";

/**
 * Retratos 32×32 estilo SNES 16-bit (referência: Final Fantasy VI / Chrono Trigger).
 * Contorno escuro na silhueta, sombreamento em 3 tons (highlight/base/sombra),
 * brilho nos olhos. Cada linha deve ter exatamente 32 caracteres;
 * ' ' e '.' são transparentes. Luz vinda da esquerda.
 */

export const MARCUS: PixelArt = {
  art: [
    ".......OHHHHHHHHHHHHHHHHO.......",
    "......OHHHHHHHHHHHHHHHHHHHO.....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    ".....OHHWWWHHHHHHHHHHWWWHHO.....",
    ".....OHWWWWWHHHHHHHHWWWWWHO.....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSgGGGGEEBGGGGGGgSHO.....",
    ".....OHSSgGGGGEEBGGGGGGgSHO.....",
    ".....OHSSgGGGGGGGGGGGGGgSHO.....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSSSSSSSSSSSSSSSSSHO.....",
    ".....OHSSSSSSSSRRRRSSSSSSHO.....",
    ".....OHSSbbbbbbbbbbbbbbbbSHO....",
    ".....OHHSSbbbbbbbbbbbbbbSSHHO...",
    "......OHHSSSSSSSSSSSSSSSSHHO....",
    ".......OHHSSSSSSSSSSSSSSHHHO....",
    ".......OHHHSSSSSSSSSSSSHHHHO....",
    "......OccccccccccccccccccccO....",
    ".....OccccccccccccccccccccccO...",
    "....OccccccccccccccccccccccccO..",
    "...OccccccccccccccccccccccccccO.",
    "..OccccccccccccccccccccccccccccO",
    "..OccccccccccccccccccccccccccccO",
    "..OccccccccccccccccccccccccccccO",
    "..OccccccccccccccccccccccccccccO",
    "..OCCCCCCCCCCCCCCCCCCCCCCCCCCCO.",
  ],
  palette: {
    O: "#1A1A1A", // outline
    H: "#14161C", // cabelo preto
    W: "#C0C6D0", // mechas brancas (grisalhas)
    S: "#F0B878", // pele
    s: "#D89A52", // pele sombra
    h: "#F8D0A0", // pele highlight
    g: "#2E3A4A", // moldura dos óculos
    G: "#B8D0EC", // vidro dos óculos
    E: "#20242C", // olhos
    B: "#FFFFFF", // brilho dos olhos
    R: "#C05A5E", // boca
    b: "#A8A098", // barba rala
    c: "#E07A3C", // camisa terracota
    C: "#B05A28", // camisa sombra
    d: "#F09050", // camisa highlight
  },
};

export const VALERIA: PixelArt = {
  art: [
    "......OHHHHHHHHHHHHHHHHHHHO.....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSEEEEEEEEEEEEESSSHHO....",
    "....OHHSSEEEEEEEEEEEEESSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....ODHHSSSSSSSSSSSSSSSSSHHDO...",
    "....ODHHSSSSSSSSSSSSSSSSSHHDO...",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHSSSSSSSSRRRRRRSSSSHHO....",
    "....OHHSSSSSSSSSSSSSSSSSSHHO....",
    "....OHHHSSSSSSSSSSSSSSSSHHHO....",
    ".....OHHHSSSSSSSSSSSSSSHHHHO....",
    ".....OHHHHSSSSSSSSSSSSHHHHHO....",
    "....ODDLLLLLLLLLLLLLLLLLLLLlO...",
    "....ODLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
    "....OLLLLLLLLLLLLLLLLLLLLLLLlO..",
  ],
  palette: {
    O: "#1A1A1A", // outline
    H: "#14161C", // cabelo preto puro
    h: "#2E3440", // cabelo sombra (preto azulado)
    S: "#F2C08C", // pele
    s: "#D09A5E", // pele sombra
    E: "#14161C", // olhos
    B: "#FFFFFF", // brilho dos olhos
    D: "#FFD54A", // brinco dourado
    R: "#C05A5E", // lábios
    L: "#3B82F6", // blusa azul
    l: "#1D4ED8", // blusa sombra
  },
};

export const FRAN: PixelArt = {
  art: [
    "......OHHHHHHHHHHHHHHHHHHHO.....",
    ".....OHHHHHHHHHHHHHHHHHHHHHO....",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHHHHHHHHHHHHHHHHHHHO...",
    "....OHHHHHSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSEEEEEEEEEEEEESSSHHO...",
    "....OHHHSSEEEEEEEEEEEEESSSHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHSSSSSSSRRRRSSSSSSHHHO...",
    "....OHHHSSSSSSSSSSSSSSSSSHHHO...",
    "....OHHHHSSSSSSSSSSSSSSSHHHHO...",
    ".....OHHHHSSSSSSSSSSSSSHHHHHO...",
    ".....OHHHHHSSSSSSSSSSSHHHHHHO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
    "....OUUUUUUUUUUUUUUUUUUUUUUuO...",
  ],
  palette: {
    O: "#1A1A1A", // outline
    H: "#4A3B32", // cabelo castanho
    h: "#6B5546", // mechas
    S: "#F2C08C", // pele
    s: "#D09A5E", // pele sombra
    E: "#3D2B20", // olhos
    B: "#FFFFFF", // brilho dos olhos
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
