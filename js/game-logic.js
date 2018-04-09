// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

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


function getRoundWinner (roundNumber) {
  const player1 = 'Player One';
  const player2 = 'Player Two';
  const tie = 'Tie';

  // check for valid round number; should be a 1 , 2 , or 3
  if (!(roundNumber === 1 || roundNumber === 2 || roundNumber === 3)) {
    return null;
  }

  // return null if any of these values are missing or invalid
  if (isValidMoveType(playerOneMoveOneType) && isValidMoveType(playerOneMoveTwoType) && isValidMoveType(playerOneMoveThreeType) && isValidMoveType(playerTwoMoveOneType) && isValidMoveType(playerTwoMoveTwoType) && isValidMoveType(playerTwoMoveThreeType)) {
    // do nothing and continue to process the function
  } else {
    return null;
  };

  if (isValidMoveValue(playerOneMoveOneValue) && isValidMoveValue(playerOneMoveTwoValue) && isValidMoveValue(playerOneMoveThreeValue) && isValidMoveValue(playerTwoMoveOneValue) && isValidMoveValue(playerTwoMoveTwoValue) && isValidMoveValue(playerTwoMoveThreeValue)) {
    // do nothing and continue to process the function
  } else {
    return null;
  };


  switch(roundNumber) {
    case 1:
    if ((playerOneMoveOneType === "rock" && playerTwoMoveOneType === "scissors") || (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "rock") || (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "paper")) {
      return player1;
    } else if ((playerTwoMoveOneType === "rock" && playerOneMoveOneType === "scissors") || (playerTwoMoveOneType === "paper" && playerOneMoveOneType === "rock") || (playerTwoMoveOneType === "scissors" && playerOneMoveOneType === "paper")) {
      return player2;
    };
    if (playerOneMoveOneValue === playerTwoMoveOneValue) {
      return tie;
    } else if ( playerOneMoveOneValue > playerTwoMoveOneValue ) {
      return player1;
    } else {
      return player2;
    }
    break;

    case 2:
    if ((playerOneMoveTwoType === "rock" && playerTwoMoveTwoType === "scissors") || (playerOneMoveTwoType === "paper" && playerTwoMoveTwoType === "rock") || (playerOneMoveTwoType === "scissors" && playerTwoMoveTwoType === "paper")) {
      return player1;
    } else if ((playerTwoMoveTwoType === "rock" && playerOneMoveTwoType === "scissors") || (playerTwoMoveTwoType === "paper" && playerOneMoveTwoType === "rock") || (playerTwoMoveTwoType === "scissors" && playerOneMoveTwoType === "paper")) {
      return player2;
    };
    if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
      return tie;
    } else if ( playerOneMoveTwoValue > playerTwoMoveTwoValue ) {
      return player1;
    } else {
      return player2;
    }
    break;

    case 3:
    if ((playerOneMoveThreeType === "rock" && playerTwoMoveThreeType === "scissors") || (playerOneMoveThreeType === "paper" && playerTwoMoveThreeType === "rock") || (playerOneMoveThreeType === "scissors" && playerTwoMoveThreeType === "paper")) {
      return player1;
    } else if ((playerTwoMoveThreeType === "rock" && playerOneMoveThreeType === "scissors") || (playerTwoMoveThreeType === "paper" && playerOneMoveThreeType === "rock") || (playerTwoMoveThreeType === "scissors" && playerOneMoveThreeType === "paper")) {
      return player2;
    };
    if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
      return tie;
    } else if ( playerOneMoveThreeValue > playerTwoMoveThreeValue ) {
      return player1;
    } else {
      return player2;
    }
    break;

  }

  // paper beats rock

  // rock beats scissors
  // scissors beats paper

  // paper vs paper goes to tie breaker
  // rock vs rock goes to tie breaker
  // scissors vs scissors goes to tie breaker
  // tie breaker is roundValue vs roundValue



};
