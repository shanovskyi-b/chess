'use strict';

const ChessField = import('./chess-field');

const boardSize = 8;

class ChessBoard {
  parentElement: any;
  element: any;
  fields: any;

  constructor(container: any) {
    this.parentElement = container;
    
    this.element = document.createElement('div');
    this.element.classList.add('chess-board');
    
    this.fields = [];
  }
}

export default ChessBoard;