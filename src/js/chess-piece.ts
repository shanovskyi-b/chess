'use strict';

type piecesColor = 'black' | 'white';
type pieceType = 'Pawn' | 'Rook' | 'Knight' | 'Bishop' | 'Queen' | 'King';

class ChessPiece {
  readonly element: HTMLElement = document.createElement('div');
  type: pieceType;

  constructor ({ color, type } : { color: piecesColor, type: pieceType }) {
    this.type = type;

    this.element.classList.add('chess-piece', 'chess-piece--' + color);
  }


}

export default ChessPiece;