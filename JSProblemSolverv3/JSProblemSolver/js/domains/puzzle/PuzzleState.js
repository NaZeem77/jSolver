function PuzzleState(tiles) {

    this.tiles = tiles;

    this.Location = function(row, column) {
        tiles.row = row;
        tiles.column = column;
    }

    this.getColumn = function() {
        return tiles.column;
    }

    this.getRow = function() {
        return tiles.row;
    }

    this.getLocation = function(tile) {
        for(var r=0; r<3; r++) {
            for(var c=0; c<3; c++) {
                if(tiles[r][c] === tile) {
                    //return  new this.Location(r,c);
                    return {row: r, column: c}; 
                }
            }
        }
        return "Tile not found";
    }

    this.toString = function() {
	// You provide
    var daString = "";

    for(var c=0; c<3; c++) {
        daString += startEnd;
        daString += fLine;
        for(var r=0; r<3; r++) {
            daString += tiles[c][r];
            if(r<2) {
                daString += mLine;
            }
        }
        daString += eLine;

    }
    daString += startEnd;
    return daString;
    };

    this.equals = function(other) {
	// You provide
    if(other === null) { return false};
    for(var c=0; c<3; c++) {
        for(var r=0; r<3; r++) {
            if((this.tiles[r][c]) !== (other.tiles[r][c])) {
                return false;
            }
        }
    }
    return true;
    };

    this.swap = function (tloc1, tloc2) {
        var duplicate = this.tiles.slice();
        
        duplicate[0] = this.tiles[0].slice();
        duplicate[1] = this.tiles[1].slice();
        duplicate[2] = this.tiles[2].slice();
        let temp = duplicate[tloc1.row][tloc1.column];
        duplicate[tloc1.row][tloc1.column] = duplicate[tloc2.row][tloc2.column];
        duplicate[tloc2.row][tloc2.column] = temp;
        return new PuzzleState(duplicate);
        };

    // Other properties and methods here

    this.makeCanvas = function() {
	return this.makeDefaultCanvas(this);
    };
}


PuzzleState.prototype = STATE_PROTO;
var startEnd = "+---+---+---+\n";
var mLine = " | ";
var eLine = " |\n";
var fLine = "| ";

// Helper functions here

