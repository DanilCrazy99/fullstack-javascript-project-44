// main logic games
import readlineSync from 'readline-sync';

// Приветствие игрока
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};

const Mistake = (answer, result, namePlayer = 'Player') => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
};

const Congratulations = (namePlayer = 'Player') => {
  console.log(`Congratulations, ${namePlayer}!`);
};

export { Greeting, Mistake, Congratulations };
