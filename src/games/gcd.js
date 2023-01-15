// logic for brain game "greatest common divisor"

import engine from '../index.js';
import getRandomNum from '../utils.js';
// import { primeNumbers } from '../games_settings.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } return getGCD(num2 % num1, num1);
};

const generateRound = () => {
  const num1 = getRandomNum(0, 20);
  const num2 = getRandomNum(0, 20);
  const result = String(getGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, result];
};

export default () => { engine(rules, generateRound); };
