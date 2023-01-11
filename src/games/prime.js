// logic for brain game "prime"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';
import { primeNumbers } from '../games_settings.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  let result = 'no';
  const number = getRandomNum(1, 20);
  if (primeNumbers.includes(number)) {
    result = 'yes';
  }
  return [number, result];
};

export default () => { ENGINE(rules, generateRound); };
