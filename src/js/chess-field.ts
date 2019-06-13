'use strict';

const ChessPiece = import('./chess-piece');

export type FieldColor = 'black' | 'white';

export class ChessField {
  readonly element: HTMLElement = document.createElement('div');

  constructor ({ color } : { color: FieldColor }) {
    this.element.classList.add('chess-field', 'chess-field--' + color);
  }


}