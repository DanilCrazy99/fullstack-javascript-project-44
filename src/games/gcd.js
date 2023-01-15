// logic for brain game "greatest common divisor"

import engine from '../index.js';
import getRandomNum from '../utils.js';
import { primeNumbers } from '../games_settings.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findTempDenominator = (num) => {
  const arrayTempDenominator = [];
  let tempNum = num;
  while (tempNum !== 1) {
    for (let a = 0; a < primeNumbers.length; a += 1) {
      if (tempNum % primeNumbers[a] === 0) {
        tempNum /= primeNumbers[a];
        arrayTempDenominator.push(primeNumbers[a]);
        break;
      }
    }
  }
  return arrayTempDenominator;
};

const findGCDtwoNumbers = (tempDenominator1, tempDenominator2) => {
  const Denominator1 = tempDenominator1;
  const Denominator2 = tempDenominator2;
  let result = 1;
  for (let c = Denominator1.length; c > 0; c -= 1) {
    for (let d = Denominator2.length; d > 0; d -= 1) {
      if (Denominator1[c - 1] === Denominator2[d - 1]) {
        result *= Denominator2[d - 1];
        Denominator1[c - 1] = 1;
        Denominator2[d - 1] = 1;
      }
    }
  }
  return result;
};

const generateRound = () => {
  const num1 = getRandomNum(0, 20);
  const num2 = getRandomNum(0, 20);
  const arrDenominatorFirstNum = findTempDenominator(num1);
  const arrDenominatorSecondNum = findTempDenominator(num2);
  const result = String(findGCDtwoNumbers(arrDenominatorFirstNum, arrDenominatorSecondNum));
  const question = `${num1} ${num2}`;
  return [question, result];
};

export default () => { engine(rules, generateRound); };
