const p1 = ["scissors", "paper", "rock"];
const p2 = ["scissors", "paper", "rock"];

const rps1 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw";

  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "rock") return "Player 2 won!";

  if (p1 === "apper" && p2 === "scissors") return "Player 2 won!";
  if (p1 === "apper" && p2 === "rock") return "Player 2 won!";

  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "rock" && p2 === "paper") return "Player 2 won!";
};
