"use client";

import { memo } from "react";

export interface PixelArt {
  art: string[];
  palette: Record<string, string>;
}

export interface PixelSpriteProps extends PixelArt {
  /** pixels por célula (default 4) */
  scale?: number;
  className?: string;
  /**
   * Quando true, o SVG preenche o container (preserveAspectRatio slice)
   * em vez de usar o tamanho natural. Útil para fundos de cena.
   */
  cover?: boolean;
}

/**
 * Renderiza uma matriz de pixels como SVG com shape-rendering="crispEdges".
 * Células são agrupadas por cor para reduzir o número de <rect>.
 * Caracteres ' ' e '.' são transparentes.
 */
export const PixelSprite = memo(function PixelSprite({
  art,
  palette,
  scale = 4,
  className,
  cover = false,
}: PixelSpriteProps) {
  const rows = art.length;
  const cols = art[0]?.length ?? 0;

  const groups = new Map<string, Array<[number, number]>>();
  for (let y = 0; y < rows; y++) {
    const row = art[y];
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char === " " || char === ".") continue;
      if (!palette[char]) continue;
      const cells = groups.get(char);
      if (cells) cells.push([x, y]);
      else groups.set(char, [[x, y]]);
    }
  }

  return (
    <svg
      width={cover ? "100%" : cols * scale}
      height={cover ? "100%" : rows * scale}
      viewBox={`0 0 ${cols} ${rows}`}
      preserveAspectRatio={cover ? "xMidYMid slice" : "xMidYMid meet"}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {Array.from(groups.entries()).map(([char, cells]) => (
        <g key={char} fill={palette[char]}>
          {cells.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
          ))}
        </g>
      ))}
    </svg>
  );
});