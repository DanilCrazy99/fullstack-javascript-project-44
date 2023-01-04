// logic for brain game "prime"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../index.js';
import { countRounds } from '../games_settings.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

const gamePrime = (namePlayer = 'Player') => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    let result = 'no';
    const number = Math.floor(Math.random() * 20);
    if (primeNumbers.includes(number)) {
      result = 'yes';
    }
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (result !== answer) {
      Mistake(answer, result, namePlayer);
      break;
    }
    if (i === countRounds - 1) {
      Congratulations(namePlayer);
    }
  }
};

export default gamePrime;
