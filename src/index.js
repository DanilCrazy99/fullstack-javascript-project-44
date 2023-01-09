import readlineSync from 'readline-sync';
import { countRounds } from './games_settings.js';

const ENGINE = (gameDescription, newRound) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  let i = 0;
  console.log(gameDescription);
  for (; i < countRounds; i += 1) {
    const [question, result] = newRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(result) !== String(answer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log("Let's try again!");
      break;
    }
  }
  if (i === countRounds) {
    console.log('Congratulations!');
  }
};

export default ENGINE;
