'use strict';

// const { ChessField } = import('./chess-field');
import { ChessField, FieldColor } from './chess-field';

const boardSize = 8;

export default class ChessBoard {
  private parentElement: HTMLElement;
  element: HTMLElement;
  fields: ChessField[][] = [];

  constructor(container: HTMLElement) {
    this.parentElement = container;
    
    this.initElement();
    this.initFields();

    this.parentElement.appendChild(this.element);
  }

  private initElement () {
    this.element = document.createElement('div');
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
}