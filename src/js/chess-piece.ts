'use strict';

type piecesColor = 'black' | 'white';

class ChessPiece {
  readonly element: HTMLElement = document.createElement('div');

  constructor ({ color } : { color: piecesColor }) {
    this.element.classList.add('chess-piece', 'chess-piece--' + color);
  }


}

export default ChessPiece;