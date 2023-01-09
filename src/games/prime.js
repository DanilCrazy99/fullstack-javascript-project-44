// logic for brain game "prime"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
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
