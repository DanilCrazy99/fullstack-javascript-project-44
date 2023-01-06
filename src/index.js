import readlineSync from 'readline-sync';
import { countRounds } from './games_settings.js';
import { Mistake, Congratulations } from './cli.js';

const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
};

const ENGINE = (gameDescription, newRound) => {
  Greeting();
  let i = 0;
  console.log(gameDescription);
  for (; i < countRounds; i += 1) {
    const [question, result] = newRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(result) !== String(answer)) {
      Mistake(answer, result);
      break;
    }
  }
  if (i === countRounds) {
    Congratulations();
  }
};

export default ENGINE;
