import readlineSync from 'readline-sync';
import { countRounds } from './games_settings.js';

const engine = (gameDescription, newRound) => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  console.log(gameDescription);
  for (let i = 0; i < countRounds; i += 1) {
    const [questionRound, resultRound] = newRound();
    console.log(`Question: ${questionRound}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (resultRound !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${resultRound}'.`);
      return console.log(`Let's try again, ${namePlayer}!`);
    }
  }
  return console.log(`Congratulations, ${namePlayer}!`);
};

export default engine;
