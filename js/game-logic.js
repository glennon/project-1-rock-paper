// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue,
    playerOneWins,
    playerTwoWins;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
      const player1 = 'Player One';
      const player2 = 'Player Two';

  if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
      !moveThreeType || !moveThreeValue) {
    return null;
  }

  // moves and value validator
  if (!(isValueSumValid(moveOneValue, moveTwoValue, moveThreeValue))) {
    return null;
  }

  // check to make sure the values are between 1 and 99
  if (isValidMoveValue(moveOneValue) && isValidMoveValue(moveTwoValue) && isValidMoveValue(moveThreeValue)) {
    // all good. do nothing
  } else {
    return null;
  }

  if (!isValidMoveType(moveOneType) ||
      !isValidMoveType(moveTwoType) ||
      !isValidMoveType(moveThreeType)) {
    return null;
  }

  // since things for this far, assign the moves to the appropriate player
  switch (player) {
    case 'Player One':
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
    break;

    case 'Player Two':
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
    break;
  }
};

function isValidMoveType(moveType) {
  if ((moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors')) {
    return true;
  } else {
    return false;
  }
};

function isValidMoveValue(moveValue) {
  if ((moveValue >= 1) && (moveValue <= 99)) {
    return true;
  } else {
    return false;
  }
}

function isValueSumValid (moveOneValue, moveTwoValue, moveThreeValue) {
  if (((moveOneValue + moveTwoValue + moveThreeValue) > 0) && ((moveOneValue + moveTwoValue + moveThreeValue) < 100)) {
    return true;
  } else {
    return false;
  }
}

function getRoundWinner(roundNumber) {
  switch(roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                           playerOneMoveOneValue,
                           playerTwoMoveOneType,
                           playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
    default:
      return null;
  }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
                       playerTwoMoveValue) {
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
      !playerTwoMoveValue) {
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
};

function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
    !playerOneMoveThreeType || !playerOneMoveOneValue ||
    !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
    !playerTwoMoveOneType || !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;

    for (i = 1; i < 4; i++) {
      if (getRoundWinner(i) === 'Player One') {
        playerOneWins++;
      } else if ((getRoundWinner(i) === 'Player Two')) {
          playerTwoWins++;
      }
    };

    if (playerOneWins > playerTwoWins) {
      return 'Player One';
    } else if (playerTwoWins > playerOneWins) {
      return 'Player Two';
    } else {
      return 'Tie';
    };
  };

  function setComputerMoves() {
    const move = ['paper', 'rock', 'scissors'];
    const moveOneType = move[Math.floor(Math.random() * 3)];
    const moveTwoType = move[Math.floor(Math.random() * 3)];
    const moveThreeType = move[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 97) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                   moveTwoValue, moveThreeType, moveThreeValue);
  }
