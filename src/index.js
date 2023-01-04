// main logic games

const Mistake = (answer, result) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log("Let's try again!");
};

const Congratulations = () => {
  console.log('Congratulations!');
};

export { Mistake, Congratulations };
