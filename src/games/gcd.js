// logic for brain game "greatest common divisor"

import ENGINE from '../index.js';
import getRandomNum from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const Denominator = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

const findTempDenominator = (num, arrayTempDenominator) => {
  let tempNum = num;
  while (tempNum !== 1) {
    for (let a = 0; a < Denominator.length; a += 1) {
      if (tempNum % Denominator[a] === 0) {
        tempNum /= Denominator[a];
        arrayTempDenominator.push(Denominator[a]);
        break;
      }
    }
  }
};

const generateRound = () => {
  const tempDenominator1 = [];
  const tempDenominator2 = [];
  const num1 = getRandomNum(0, 20);
  const num2 = getRandomNum(0, 20);
  let result = 1;
  findTempDenominator(num1, tempDenominator1);
  findTempDenominator(num2, tempDenominator2);
  for (let c = tempDenominator1.length; c > 0; c -= 1) {
    for (let d = tempDenominator2.length; d > 0; d -= 1) {
      if (tempDenominator1[c - 1] === tempDenominator2[d - 1]) {
        result *= tempDenominator2[d - 1];
        tempDenominator1[c - 1] = 1;
        tempDenominator2[d - 1] = 1;
      }
    }
  }
  return [`${num1} ${num2}`, String(result)];
};

export default () => { ENGINE(rules, generateRound); };
