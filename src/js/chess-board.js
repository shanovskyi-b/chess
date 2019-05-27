'use strict';

const ChessField = import('./chess-field.js');

const boardSize = 8;

class ChessBoard {
  constructor(container) {
    this.parentElement = container;
    
    this.element = document.createElement('div');
    this.element.classList.add('chess-board');
    
    this.fields = [];
  }
}

export default ChessBoard;