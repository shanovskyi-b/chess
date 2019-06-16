'use strict';

import { ChessPiece } from './chess-piece';

export type FieldColor = 'black' | 'white';

export class ChessField {
  readonly element: HTMLElement = document.createElement('div');
  private _piece: ChessPiece = null;

  constructor ({ color } : { color: FieldColor }) {
    this.element.classList.add('chess-field', 'chess-field--' + color);
  }

  get piece (): ChessPiece{
    return this._piece;
  }

  set piece (piece: ChessPiece | null) {
    if (this._piece) {
      this.element.removeChild(this._piece.element);
    }
    
    if (piece) {
      this.element.appendChild(piece.element);
    }
    
    this._piece = piece;
  }

  onClick (f: Function) {
    this.element.addEventListener('click', () => {
      f(this);
    });
  }

  setActiviy (active: boolean) {
    if (active) {
      this.element.classList.add('chess-field--active');
    } else {
      this.element.classList.remove('chess-field--active');
    }
  }

}