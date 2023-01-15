// logic for brain game "prime"

import getRandomNum from '../utils.js';
import engine from '../index.js';
import { primeNumbers } from '../games_settings.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrimeNumber = (number) => {
  let result = 'no';
  if (primeNumbers.includes(number)) {
    result = 'yes';
  }
  return result;
};
const generateRound = () => {
  const number = getRandomNum(1, 20);
  return [number, checkIsPrimeNumber(number)];
};

export default () => { engine(rules, generateRound); };
