'use strict';

// const { ChessField } = import('./chess-field');
import { ChessField, FieldColor } from './chess-field';
import { PieceType, ChessPiece } from './chess-piece';
import { Point } from './utils';

const boardSize = 8;

function movesForPiece (type: PieceType, position: Point) {
  const from = position;
  const moves = {
    'Pawn': function (position: Point) {
      //
    }
  };

  // return moves[type];
}

export default class ChessBoard {
  private parentElement: HTMLElement;
  private availableMoves: Point[] = [];
  readonly element: HTMLElement = document.createElement('div');
  fields: ChessField[][] = [];

  constructor(container: HTMLElement) {
    this.parentElement = container;
    
    this.initElement();
    this.initFields();

    this.parentElement.appendChild(this.element);
  }

  private initElement () {
    this.element.classList.add('chess-board');
  }

  private initFields () {
    for(let i = 0; i < boardSize; i++) {
      this.fields.push([]);
      for(let j = 0; j < boardSize; j++) {
        let color: FieldColor = (i + j) % 2 ? 'white' : 'black';
        this.fields[i].push(new ChessField({ color }));
      }
    }

    this.appendFields();
  }

  private appendFields () {
    this.fields.forEach( (fieldsLine) => {
      const lineElement = document.createElement('div');
      lineElement.classList.add('chess-board__line');
      
      fieldsLine.forEach( (field) => {
        lineElement.appendChild(field.element);
      });
      
      this.element.appendChild(lineElement);
    });
  }

  onFieldClick (handler: Function) {
    this.forEachField( (field: ChessField, position: Point) => {
      field.onClick( () => {
        handler(field, position);
      });
    });
  }

  placePiece (piece :ChessPiece, position: Point) {
    this.fields[position.y][position.x].piece = piece;
  }

  selectPiece (position: Point) {
    const selectedField = this.fields[position.y][position.x];
    selectedField.setActiviy(true);
    this.setAvailableMoves(position);
  }

  unselectPiece (position: Point) {
    this.fields[position.y][position.x].setActiviy(false);
    // this.setAvailableMoves()
  }

  setAvailableMoves (currentPosition: Point) {
    const currentField = this.fields[currentPosition.y][currentPosition.x];

    // const isMoveAvailable = movesForPiece()
    
    // this.forEachField( (field: ChessField, position: Point) => {
    //   if (isMoveAvailable())
    // });
  }

  removePiece () {
    
  }

  private forEachField (cb: Function) {
    this.fields.forEach( (fieldsLine, y) => {
      fieldsLine.forEach( (field, x) => {
        cb(field, { x, y })
      });
    });
  }
}