export type ChessPawn = {
      pawn: string;
      size: string;
      position: { x: number; y: number };
};

export const draggableChessPieces: ChessPawn[] = [
      { pawn: 'white_queen', size: '1/4', position: { x: 10, y: 1 } },
      { pawn: 'black_knight', size: '1/4', position: { x: 30, y: 6 } },
      { pawn: 'black_rook', size: '1/4', position: { x: 1, y: 15 } },
      { pawn: 'white_knight', size: '1/4', position: { x: 15, y: 17 } },
      { pawn: 'white_king', size: '1/4', position: { x: 31, y: 29 } },
      { pawn: 'black_pawn', size: '1/4', position: { x: 5, y: 35 } },
      { pawn: 'black_king', size: '1/4', position: { x: 85, y: 1 } },
      { pawn: 'white_rook', size: '1/4', position: { x: 57, y: 5 } },
      { pawn: 'white_bishop', size: '1/4', position: { x: 86, y: 18 } },
      { pawn: 'black_queen', size: '1/4', position: { x: 73, y: 24 } },
      { pawn: 'black_bishop', size: '1/4', position: { x: 56, y: 33 } },
      { pawn: 'white_pawn', size: '1/4', position: { x: 82, y: 37 } },
];
