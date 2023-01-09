import readlineSync from 'readline-sync';
import { countRounds } from './games_settings.js';

const ENGINE = (gameDescription, newRound) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(gameDescription);
  for (let i = 0; i < countRounds; i += 1) {
    const [question, result] = newRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log("Let's try again!");
    }
    if (i === countRounds) {
      console.log('Congratulations!');
    }
  }
  return 0;
};

export default ENGINE;
