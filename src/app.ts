'use strict';

import('./css/index.scss');
// const ChessBoard = import('./js/chess-board');
import ChessBoard from './js/chess-board';

function init() {
  console.log('init');
  const chessBoard = new ChessBoard(document.getElementById('chess-board-container'));
}

document.addEventListener('DOMContentLoaded', init);