/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  /* 1 0  0 1
   * 0 1  1 0
   */
  const board = new Board({ n: n });

  // for every column in row
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // try placing a piece at row and col
      board.togglePiece(row, col);
      // check for rook conflicts
      if (board.hasAnyRooksConflicts()) {
        // if there is a conflict, toggle (unset) row, col, search the next column
        board.togglePiece(row, col); // remove the piece
      } else {
        // if there is no conflict goto next row
        break; // break out of column loop, this row is already taken
      }
    }
  }

  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //set the solution count to 0
  var solutionCount = 0;
  //instantiate new Board with the given argument
  const board = new Board({ n: n });

  //create a helper function based on the number of Rooks
  function countSolutionsForRows(row) {
    //base case is if row is equal to the given argument and then adds to the solution count
    if (row === n) {
      solutionCount += 1;
    } else {
      //loop through the board based on columns,
      for (let col = 0; col < n; col++) {
        //sets the piece
        board.togglePiece(row, col);
        if (board.hasAnyColConflicts()) {
          //unsets the piece if there are conflics
          board.togglePiece(row, col);
        } else {
          //recursively checks for all solutions with this row's rook, in each column
          countSolutionsForRows(row + 1);
          board.togglePiece(row, col);
        }
      }
    }
  }
  countSolutionsForRows(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log(
    'Single solution for ' + n + ' queens:',
    JSON.stringify(solution)
  );
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
