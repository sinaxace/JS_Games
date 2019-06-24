var board = document.getElementsByTagName("td");

// assuming we index the 9 tic tac toe cells from left to right, top to
// bottom, as 0-8, these would be all of the winning combinations:
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// X always gets to go first
var player = "X";

// keep track of how many cells are empty at any time
var empty = 9;

// keep track of game status - false if still playing
var gameOver = false;
/* Function resetGame() is called when user clicks on the "game reset" button
 1. sets content of all 9 cells to nothing
 2. sets the starting player (this version, X always starts the game)
 3. updates the message to the current player
 4. resets the number of empty cells to 9
 5. sets the game over flag to false to indicate that the game is in progress
 */
function resetGame() {

    for ( i = 0; i < board.length; i++) {
      board[i].textContent = "";
    }

    player = "X";//Resets player to X
    document.getElementById("player").textContent = player; //Replaces current player to X

    gameOver = false;
    empty = 9;
}

/* Function cellClicked() is called
 when the event listeners for the "td" cells fire which occurs
 when the user clicks on one of the nine cells of the board
 1. decreases # of empty cells by 1
 2. sets the content of the clicked cell to the current player's mark
 3. checks whether or not there is a winner
 4. flips (changes) the current player
 5. updates the message to the current player
 */
function cellClicked(cell) {

    empty--; //decrements the number of empty cells

    if (cell.textContent != "X" && cell.textContent != "O")
    {
        console.log("Change only once!");
        cell.textContent = player;
        checkWin();
        player = (player === "X") ? "O" : "X";
        document.getElementById("player").textContent = player;
    }
}

/* Function checkWin() is called to check all winning combinations and display results
 */
function checkWin() {
    for ( i = 0; i < winSets.length; i++) { // for loop for row of 2D Array
        if (board[winSets[i][0]].textContent == board[winSets[i][1]].textContent// All conditions for first row columns
            && board[winSets[i][1]].textContent == board[winSets[i][2]].textContent
            && board[winSets[i][0]].textContent != "") {

            document.getElementById("winner").textContent = player+" Wins!";
            gameOver = true;//Sets gameOver var to true
            displayWin(gameOver); //calls on displayWin function with true boolean from gameOver
            break;
        }
    }

      if (board[winSets[0][0]].textContent != "" && board[winSets[0][1]].textContent != "" //conditions for comparing all the numbers in the tic tac toe table
          && board[winSets[0][0]].textContent != "" && board[winSets[1][0]].textContent != ""
          && board[winSets[1][1]].textContent != "" && board[winSets[1][2]].textContent != ""
          && board[winSets[2][0]].textContent != "" && board[winSets[2][1]].textContent != ""
          && board[winSets[2][2]].textContent != "")
          { //Entire condition for checking table to see if no rows or columns matches
            document.getElementById("winner").textContent = "No one wins! :(";//Outputs to HTML
            gameOver = true; //sets gameOver boolean to true
            displayWin(gameOver); //calls on displayWin method to output "No one wins"
          }
}

document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("message").addEventListener("click", function() {
    displayWin(false);
});
for ( i = 0; i < board.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function() {
        cellClicked(this);
    });
}
// displays the results window with the winner inside it: the method will
// either show the results or hide them (displayWin(true) shows and
// displayWin(false) hides)
function displayWin(show) {
    if (show) {
        document.getElementById("message").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}
