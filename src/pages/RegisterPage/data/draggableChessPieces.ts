export type ChessPawn = {
      pawn: string;
      size: string;
      position: { x: number; y: number };
};

export const draggableChessPieces: ChessPawn[] = [
      { pawn: 'white_queen', size: '64', position: { x: 20, y: 15 } },
      { pawn: 'black_knight', size: '64', position: { x: 36, y: 23 } },
      { pawn: 'black_rook', size: '64', position: { x: 5, y: 45 } },
      { pawn: 'white_knight', size: '64', position: { x: 25, y: 50 } },
      { pawn: 'white_king', size: '64', position: { x: 37, y: 75 } },
      { pawn: 'black_pawn', size: '64', position: { x: 15, y: 85 } },
      { pawn: 'black_king', size: '64', position: { x: 79, y: 60 } },
      { pawn: 'white_rook', size: '64', position: { x: 63, y: 27 } },
      { pawn: 'white_bishop', size: '64', position: { x: 95, y: 44 } },
      { pawn: 'black_queen', size: '64', position: { x: 90, y: 15 } },
      { pawn: 'black_bishop', size: '64', position: { x: 62, y: 81 } },
      { pawn: 'white_pawn', size: '64', position: { x: 90, y: 90 } },
];
