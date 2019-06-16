import ChessBoard from './chess-board';
import { ChessPiece, PieceType } from './chess-piece';
import { Player, Point } from './utils';
import { ChessField } from './chess-field';

const startPiecesPosition = {
  'white': [
    { type: 'Pawn', positions: [ { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 7, y: 6 } ] },
    { type: 'Rook', positions: [ { x: 0, y: 7 }, { x: 7, y: 7 } ] },
    { type: 'Knight', positions: [ { x: 1, y: 7 }, { x: 6, y: 7 } ] },
    { type: 'Bishop', positions: [ { x: 2, y: 7 }, { x: 5, y: 7 } ] },
    { type: 'Queen', positions: [ { x: 3, y: 7 } ] },
    { type: 'King', positions: [ { x: 4, y: 7 } ] },
  ],
  'black': [
    { type: 'Pawn', positions: [ { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 7, y: 1 } ] },
    { type: 'Rook', positions: [ { x: 0, y: 0 }, { x: 7, y: 0 } ] },
    { type: 'Knight', positions: [ { x: 1, y: 0 }, { x: 6, y: 0 } ] },
    { type: 'Bishop', positions: [ { x: 2, y: 0 }, { x: 5, y: 0 } ] },
    { type: 'Queen', positions: [ { x: 3, y: 0 } ] },
    { type: 'King', positions: [ { x: 4, y: 0 } ] },
  ],
};

export default class ChessGame {
  private element: HTMLElement = document.createElement('div');
  private board: ChessBoard;
  private players: Player[] = [ 
    { name: 'player1', color: 'white' }, 
    { name: 'Player2', color: 'black' } 
  ];
  private selectedPiece: {piece: ChessPiece, position: Point};
  private highlightedFields: [];
  
  constructor (container: HTMLElement) {
    this.initBoard(container);
    this.initPieces();
  }

  private initBoard (container: HTMLElement) {
    this.board = new ChessBoard(container);
    this.board.onFieldClick( (field: ChessField, position: Point) => {
      this.handleFieldClick(field, position);
    });
  }

  private initPieces () {
    this.players.forEach( (player) => {
      startPiecesPosition[player.color].forEach( (piece) => {
        piece.positions.forEach( (point: Point) => {
          this.board.placePiece(new ChessPiece({
            owner: player, 
            type: piece.type as PieceType
          }), point);
        });
      });
    });
  }

  private handleFieldClick (field: ChessField, position: Point) {
    if (!this.selectedPiece) {
      if (field.piece) {
        // to-do check for piece owner
        this.selectedPiece = { piece: field.piece, position };
        this.board.selectPiece(position);
      }
    } else {

    }
  }

  selectPiece () {

  }

  makeMove () {

  }
}