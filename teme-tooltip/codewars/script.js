const publisher = (ideas) => {
  let counterOfGoodIdeas = 0;
  for (let i = 0; i < ideas.length; i++) {
    if (ideas[i] === "good") {
      counterOfGoodIdeas++;
    }
  }
  if (counterOfGoodIdeas === 0) return "Fail!";
  if (counterOfGoodIdeas >= 1 && counterOfGoodIdeas < 3) return "Publish";
  if (counterOfGoodIdeas >= 3) return "I smell a series!";
};
