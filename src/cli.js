import readlineSync from 'readline-sync';

const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question("What's your name? ");
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};

const Mistake = (namePlayer, answer, result) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
};

const Congratulations = (namePlayer) => {
  console.log(`Congratulations, ${namePlayer}!`);
};

export { Greeting, Mistake, Congratulations };
