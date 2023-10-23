const SLIDE_1 = "Slide 1";
const SLIDE_2 = "Slide 2";
const SLIDE_3 = "Slide 3";
const SLIDE_4 = "Slide 4";
const SLIDE_5 = "Slide 5";
const SLIDE_6 = "Slide 6";
const SLIDE_7 = "Slide 7";
const SLIDE_8 = "Slide 8";

var puzzleMover = new Mover();


puzzleMover.addMove(SLIDE_1, (s) => tile_1(s)); // You provide move functions
puzzleMover.addMove(SLIDE_2, (s) => tile_2(s));
puzzleMover.addMove(SLIDE_3, (s) => tile_3(s));
puzzleMover.addMove(SLIDE_4, (s) => tile_4(s));
puzzleMover.addMove(SLIDE_5, (s) => tile_5(s));
puzzleMover.addMove(SLIDE_6, (s) => tile_6(s));
puzzleMover.addMove(SLIDE_7, (s) => tile_7(s));
puzzleMover.addMove(SLIDE_8, (s) => tile_8(s));

function PuzzleMover() { }

function tile_1(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(1)));
    return pState ? state.swap(state.getLocation(1), state.getLocation(0)) 
    : null;  // The ? is a conditional thats makes it so the function either returns the states swapped or returns null
 }

 
 function tile_2(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(2)));
    return pState ? state.swap(state.getLocation(2), state.getLocation(0))
    : null;
    }


function tile_3(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(3)));
    return pState ? state.swap(state.getLocation(3), state.getLocation(0))
    : null;
    }


function tile_4(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(4)));
    return pState ? state.swap(state.getLocation(4), state.getLocation(0))
    : null;
    }


function tile_5(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(5)));
    return pState ? state.swap(state.getLocation(5), state.getLocation(0))
    : null;
    }


function tile_6(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(6)));
    return pState ? state.swap(state.getLocation(6), state.getLocation(0))
    : null;
    }


function tile_7(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(7)));
    return pState ? state.swap(state.getLocation(7), state.getLocation(0))
    : null;
    }


function tile_8(state) {
    var pState = (valid(state.getLocation(0), state.getLocation(8)));
    return pState ? state.swap(state.getLocation(8), state.getLocation(0))
    : null;
    }


PuzzleMover.prototype = puzzleMover;


// Helper functions here
    function valid(tLoc, blankTileLoc) {
    if(((tLoc.column -1 === blankTileLoc.column || tLoc.column +1 ===blankTileLoc.column)
                && (tLoc.row === blankTileLoc.row))
                || ((tLoc.row-1 === blankTileLoc.row
                || tLoc.row+1 === blankTileLoc.row)
                && tLoc.column === blankTileLoc.column)) {
            return true;
    }
    else {
    return false;
    }
}