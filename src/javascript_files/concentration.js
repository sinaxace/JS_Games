//------  Sets up the concentration board -----------//
const BOARD = document.getElementById("myBoard");
const theTimer = document.getElementById("timer");

//--------- Creates image properties from ELEMENT object -----------//
const ELEMENT = {
  air: document.createElement("img"),
  water: document.createElement("img"),
  earth: document.createElement("img"),
  fire: document.createElement("img"),
  bolt: document.createElement("img"),
  yingYang: document.createElement("img"),
  propertyIndex: function(image) { //propertyIndex is for treating ELEMENT as an array
        return this[Object.keys(this)[image]]; //the .keys is a method in the Object class from Javascript Library
    }
};

//---------------The following sets the src attributes for all the new image elements that were created above-------------//
ELEMENT.air.setAttribute("src", "../images/airSymbol.png"), ELEMENT.air.setAttribute("height", "20");
ELEMENT.water.setAttribute("src", "../images/waterSymbol.png"), ELEMENT.water.setAttribute("height", "20");
ELEMENT.earth.setAttribute("src", "../images/earthSymbol.png"), ELEMENT.earth.setAttribute("height", "20");
ELEMENT.fire.setAttribute("src", "../images/fireSymbol.png"), ELEMENT.fire.setAttribute("height", "20");
ELEMENT.bolt.setAttribute("src", "../images/electricBolt.png"), ELEMENT.bolt.setAttribute("height", "20");
ELEMENT.yingYang.setAttribute("src", "../images/ying_yang.png"), ELEMENT.yingYang.setAttribute("height", "20");

//-----------------This 2D array is for storing cloned image elements to be removed when starting new game-----------//
var imgArray = [[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]];
var rand = 0;
var timer = [0,0,0,0]; //array for timer numbers
var interval;
var timerRunning = false;

//-----------------Sets up the concentration board on startup------------------//
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    rand = Math.floor(Math.random() * 6)+ 0;
    imgArray[i][j] = ELEMENT.propertyIndex(rand).cloneNode(true);
    BOARD.rows[i].cells[j].appendChild(imgArray[i][j]);
  }
}




//--------------  Javascript for timer --------------------//

function buttonTimer(){
  theTimer.style.display = "block";
  hideImages();
  timerRunning = true;
  interval = setInterval(runTimer, 10);
}
// Run a standard minute/second/hundredths timer:
function runTimer() {
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.textContent = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor((timer[3] - (timer[1]*100) - (timer[0] * 6000)));
}

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if(time <= 9) {
        time = "0" + time;
    }
    return time;
}






function resetGame(){
  //------resetting timer----------//
  clearInterval(interval); //resets time interval
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;
  theTimer.style.display = "none";

//-------------resetting board--------------//
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          BOARD.rows[i].cells[j].style.backgroundColor = "white";
          BOARD.rows[i].cells[j].removeChild(imgArray[i][j]);
          rand = Math.floor(Math.random() * 6)+ 0;
          imgArray[i][j] = ELEMENT.propertyIndex(rand).cloneNode(true);
          BOARD.rows[i].cells[j].appendChild(imgArray[i][j]);
        }
      }
  }





//--------------Javascript for image handling-----------------//
var flag = true;
var firstImage;
function checkImage(rowIndex, columnIndex){
    BOARD.rows[rowIndex].cells[columnIndex].firstChild.style.display = "initial";
    BOARD.rows[rowIndex].cells[columnIndex].style.backgroundColor = "white";
    if(flag === true)
    {
      firstImage = BOARD.rows[rowIndex].cells[columnIndex].firstChild;
      flag = false;
      return;
    }
    else if(flag === false)
    {
      flag = true;
      if(BOARD.rows[rowIndex].cells[columnIndex].firstChild.attributes == firstImage.attributes)
      {
        BOARD.rows[rowIndex].cells[column].firstChild.style.display = "none";
        firstImage.style.display = "none";
      }
    }
}
function hideImages(){
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      BOARD.rows[i].cells[j].style.backgroundColor = "lightCoral";
      BOARD.rows[i].cells[j].firstChild.style.display = "none";
    }
  }
}
