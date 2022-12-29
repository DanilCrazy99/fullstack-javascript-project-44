// logic for brain game "greatest common divisor"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from './index.js';
import countRounds from './games_settings.js';

const gameGCD = (namePlayer = 'Player') => {
  const Denominator = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    const tempDenominator1 = [];
    const tempDenominator2 = [];
    const num1 = Math.floor(Math.random() * 10 + Math.random() * 10);
    let tempNum1 = num1;
    const num2 = Math.floor(Math.random() * 10 + Math.random() * 10);
    let tempNum2 = num2;
    let result = 1;
    while (tempNum1 !== 1) {
      for (let a = 0; a < Denominator.length; a += 1) {
        if (tempNum1 % Denominator[a] === 0) {
          tempNum1 /= Denominator[a];
          tempDenominator1.push(Denominator[a]);
          break;
        }
      }
    }
    while (tempNum2 !== 1) {
      for (let b = 0; b < Denominator.length; b += 1) {
        if (tempNum2 % Denominator[b] === 0) {
          tempNum2 /= Denominator[b];
          tempDenominator2.push(Denominator[b]);
          break;
        }
      }
    }
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
      Mistake(answer, result, namePlayer);
      break;
    } else if (i === countRounds - 1) {
      Congratulations(namePlayer);
    }
  }
};

export default gameGCD;
