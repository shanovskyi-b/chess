'use strict';

const fieldColours = ['black', 'white'];

class ChessFiled {
  constructor(color) {
    this.element = document.createElement('div');

    if (fieldColours.indexOf(color) === -1) {
      throw new Error('No such color as', color);
    }
    
    this.element.classList.add('chess-field', 'chess-field'+color);
  }
}

export default ChessFiled;