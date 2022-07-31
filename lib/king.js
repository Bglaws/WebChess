'use strict';

const Color = require('./color');

module.exports = class King {
    constructor (color, row, col) {
        this.color = color;
        this.row = row;
        this.col = col;
    }

    toString() {
        if (this.color == Color.BLACK) {
            return "♔";
        }
        return "♚";
    }
}