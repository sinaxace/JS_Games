
    const DICEONE = document.getElementById( 'diceSide1' );
    const DICETWO = document.getElementById( 'diceSide2' );
    const SCORE = document.getElementById( 'score' );
    const WINSTAT = document.getElementById( 'win' );
    const LOSESTAT = document.getElementById( 'loss' );
    WINSTAT.value = 0;
    LOSESTAT.value = 0;

    function rollDice() {

        DICEONE.value = Math.floor(Math.random() * 6 ) + 1;
        DICETWO.value = Math.floor(Math.random() * 6 ) + 1;
        DICEONE.textContent = DICEONE.value, DICETWO.textContent = DICETWO.value;

        SCORE.value = DICEONE.value + DICETWO.value, SCORE.textContent = SCORE.value;

        if(SCORE.value === 7 || SCORE.value === 11){
            WINSTAT.value++;
            WINSTAT.textContent = WINSTAT.value
        }
        else if(SCORE.value === 2 || SCORE.value === 3 || SCORE.value === 12)
        {
            LOSESTAT.value++;
            LOSESTAT.textContent = LOSESTAT.value;
        }
    }
    function resetDice() {
      WINSTAT.value = 0, LOSESTAT.value = 0, LOSESTAT.value = 0, DICETWO.value = 0, SCORE.value = 0;
      WINSTAT.textContent = 0;
      LOSESTAT.textContent = 0;
      DICEONE.textContent = 0;
      DICETWO.textContent = 0;
      SCORE.textContent = 0;

    }
