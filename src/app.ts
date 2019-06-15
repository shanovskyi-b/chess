'use strict';

import('./css/index.scss');
// const ChessBoard = import('./js/chess-board');
import ChessGame from './js/chess-game';

function init() {
  console.log('init');
  const game = new ChessGame(document.getElementById('chess-board-container'));
}

document.addEventListener('DOMContentLoaded', init);