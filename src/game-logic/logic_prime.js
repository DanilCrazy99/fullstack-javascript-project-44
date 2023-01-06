// logic for brain game "prime"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../cli.js';
import { countRounds } from '../games_settings.js';
import getRandomNum from '../utils.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < countRounds; i += 1) {
    let result = 'no';
    const number = getRandomNum(1, 20);
    if (primeNumbers.includes(number)) {
      result = 'yes';
    }
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (result !== answer) {
      Mistake(answer, result);
      break;
    }
    if (i === countRounds - 1) {
      Congratulations();
    }
  }
};

export default gamePrime;
