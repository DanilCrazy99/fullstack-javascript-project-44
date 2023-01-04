// logic for brain game "greatest common divisor"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../index.js';
import { lengthProgression, countRounds } from '../games_settings.js';
import getRandomNum from '../utils.js';

const gameProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    const lengthInGame = getRandomNum(5, lengthProgression);
    const startNum = getRandomNum(1, 10);
    const progressionArr = [startNum];
    const progressionStep = getRandomNum(1, 10);
    for (let a = 1; a <= lengthInGame - 1; a += 1) {
      progressionArr.push(startNum + a * progressionStep);
    }
    const randomCellArr = getRandomNum(0, progressionArr.length - 1);
    const result = progressionArr[randomCellArr];
    progressionArr[randomCellArr] = '..';
    let question = '';
    for (let a = 0; a < progressionArr.length; a += 1) {
      question += progressionArr[a];
      if (a < progressionArr.length - 1) {
        question += ' ';
      }
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (Number(answer) !== result) {
      Mistake(answer, result);
      break;
    }
    if (i === countRounds - 1) {
      Congratulations();
    }
  }
};

export default gameProgression;
