// end game logic

const Mistake = (namePlayer, answer, result) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
};

const Congratulations = (namePlayer) => {
  console.log(`Congratulations, ${namePlayer}!`);
};

export { Mistake, Congratulations };
