import readlineSync from 'readline-sync';

// Приветствие игрока
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
};

const Mistake = (answer, result) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log("Let's try again!");
};

const Congratulations = () => {
  console.log('Congratulations!');
};

export { Mistake, Congratulations, Greeting };
