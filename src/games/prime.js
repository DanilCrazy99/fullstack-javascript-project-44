// logic for brain game "prime"

import getRandomNum from '../utils.js';
import engine from '../index.js';
import { primeNumbers } from '../games_settings.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrimeNumber = (number) => {
  if (primeNumbers.includes(number)) {
    return true;
  }
  return false;
};
const generateRound = () => {
  const question = getRandomNum(1, 20);
  const answer = String(checkIsPrimeNumber(question) ? 'yes' : 'no');
  return [question, answer];
};

export default () => { engine(rules, generateRound); };
