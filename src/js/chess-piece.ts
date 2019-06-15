'use strict';

import { Player } from './utils';

export type PieceType = 'Pawn' | 'Rook' | 'Knight' | 'Bishop' | 'Queen' | 'King';

export class ChessPiece {
  readonly element: HTMLElement = document.createElement('div');
  owner: Player;
  type: PieceType;

  constructor ({ owner, type } : { owner: Player, type: PieceType }) {
    this.type = type;

    this.element.classList.add('chess-piece', 'chess-piece--' + type, 'chess-piece--' + owner.color);
  }


}