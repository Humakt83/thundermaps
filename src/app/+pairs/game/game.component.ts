import { Component, Input, OnInit } from '@angular/core';
import { Pairs } from '../pairs';

const COLOR_PREFIX: string = 'rgb';
const COLORS: string[] = ['(0,0,0)', '(50, 50, 50)', '(100, 100, 100)', '(150, 150, 150)', '(200, 200, 200)', '(250, 250, 250)',
                        '(0, 50, 50)', '(0, 100, 100)', '(0, 150, 150)', '(0, 200, 200)', '(0, 250, 250)',
                        '(50, 50, 0)', '(100, 100, 0)', '(150, 150, 0)', '(200, 200, 0)', '(250, 250, 0)',
                        '(50, 0, 50)', '(100, 0, 100)', '(150, 0, 150)', '(200, 0, 200)', '(250, 0, 250)',
                        '(0, 0, 50)', '(0, 0, 100)', '(0, 0, 150)', '(0, 0, 200)', '(0, 0, 250)',
                        '(0, 50, 0)', '(0, 100, 0)', '(0, 150, 0)', '(0, 200, 0)', '(0, 250, 0)',
                        '(50, 0, 0)', '(100, 0, 0)', '(150, 0, 0)', '(200, 0, 0)', '(250, 0, 0)']

@Component({
    moduleId: __moduleName,
    selector: 'game',
    templateUrl: 'game.html',
    styleUrls: ['../pairs.component.css', 'game.css']
})
export class GameComponent implements OnInit {

    @Input() pairs: Pairs;
    pieces: Piece[] = [];
    pieceTable: Piece[][];
    clickedPieces: Piece[] = [];
    clicks: number = 0;
    gameOver: boolean = false;

    ngOnInit() {        
        this.generatePieces();
    }

    click(piece: Piece) {
        if (piece.found) return;
        this.clicks++;
        if (this.clickedPieces.length > 1) {
            this.clickedPieces.forEach(p => p.turned = false);
            this.clickedPieces = [];
        }
        piece.turned = true;
        this.clickedPieces.push(piece);
        if (this.clickedPieces.length === 2) {
            if (this.clickedPieces[0].pair === piece) {
                this.clickedPieces.forEach(p => p.found = true);
                this.clickedPieces = [];
            }
        }
        this.checkGameStatus();
    }

    private checkGameStatus() {
        if (this.pieces.filter(p => !p.found).length < 1) {
            this.gameOver  = true;
        }
    }

    private generatePieces() {
        const piecesAmount = this.pairs.getNumberOfPieces();
        for (let i = 0; i < piecesAmount; i++) {
            let piece: Piece;
            do {
                piece = new Piece(this.generateColor(), this.generateColor());                
            } while (this.pieces.filter(p => p.color1 === piece.color1 && p.color2 === piece.color2).length > 0);
            let pair = new Piece(piece.color1, piece.color2, piece);
            this.pieces.push(piece);
            this.pieces.push(pair);
        }
        this.pieces = this.shufflePieces(this.pieces);
        this.pieceTable = Array((piecesAmount * 2) / 5);
        for (let x = 0; x < this.pieceTable.length; x++) {
            this.pieceTable[x] = [];
            for (let y = 0; y < 5; y++) {
                this.pieceTable[x].push(this.pieces[(x*5)+y])
            }
        }
    }

    private generateColor(): string {
        return COLOR_PREFIX + COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    private shufflePieces(array: Piece[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}

}

class Piece {

    turned: boolean = false;
    found: boolean = false;
    pair: Piece;
    
    constructor(public color1: string, public color2: string, pair: Piece = undefined) {
        if (pair) {
            this.pair = pair;
            pair.pair = this;
        }
    }

}