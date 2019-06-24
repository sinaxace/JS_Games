const BINGOBOARD = document.getElementsByTagName("td");
const CALLING = document.getElementById("callerHeading");
const BINGOINDEX = [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[25,26,27,28,29]];

function newBingoCard(){
  for (var i = 0; i < BINGOINDEX.length; i++) {
    for (var j = 0; j < BINGOINDEX[0].length; j++) {
      if(i != 0 && BINGOBOARD[BINGOINDEX[i][j]].textContent != "FREE")
      {
          BINGOBOARD[BINGOINDEX[i][j]].textContent = Math.floor(Math.random() * 100 ) + 1;
      }
    }
  }
}

function bingoCall(){
    var rand = Math.floor(Math.random() * 99 ) + 1;
    var callerLetter = BINGOBOARD[BINGOINDEX[0][Math.floor(Math.random() * 5 ) + 0]];

    document.getElementById("callerMessage").style.display = "block";
    CALLING.textContent = "Calling "+callerLetter.textContent+": "+rand;
    for (var i = 0; i < BINGOINDEX.length; i++) {
      for (var j = 0; j < BINGOINDEX[0].length; j++) {
        if(BINGOBOARD[BINGOINDEX[i][j]].textContent == rand)
        {
            BINGOBOARD[BINGOINDEX[i][j]].innerHTML = "<strong>X</strong>";
        }
      }
    }
}
