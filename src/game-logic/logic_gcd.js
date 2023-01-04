// logic for brain game "greatest common divisor"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../index.js';
import { countRounds } from '../games_settings.js';

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

const gameGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    const tempDenominator1 = [];
    const tempDenominator2 = [];
    const num1 = Math.floor(Math.random() * 10 + Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10 + Math.random() * 10);
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
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result !== Number(answer)) {
      Mistake(answer, result);
      break;
    } else if (i === countRounds - 1) {
      Congratulations();
    }
  }
};

export default gameGCD;
