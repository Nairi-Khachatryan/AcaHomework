//Rock, Paper, Scissors game.

const rockPaperScissors = (player1, player2) => {
  let gameResult = "wrong move";
  const rock = "Rock";
  const paper = "Paper";
  const Scissors = "Scissors";
  if (
    (player1 !== rock && player1 !== paper && player1 !== Scissors) ||
    (player2 !== rock && player2 !== paper && player2 !== Scissors)
  ) {
    return gameResult;
  } else {
    if (player1 === player2) {
      gameResult = "Its a Draw";
    } else if (player1 === rock && player2 === paper) {
      gameResult = "Player2 Winner";
    } else if (player1 === paper && player2 === rock) {
      gameResult = "Player1 Winner";
    } else if (player1 === Scissors && player2 === rock) {
      gameResult = "Player2 Winner";
    } else if (player1 === rock && player2 === Scissors) {
      gameResult = "Player1 Winner";
    } else if (player1 === paper && player2 === Scissors) {
      gameResult = "Player2 Winner";
    } else if (player1 === Scissors && player2 === paper) {
      gameResult = "Player1 Winner";
    }
  }
  return gameResult;
};
const res = rockPaperScissors("Rock", "Rock");
console.log(res);
