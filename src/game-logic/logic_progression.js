// logic for brain game "greatest common divisor"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../index.js';
import { lengthProgression, countRounds } from '../games_settings.js';

const gameProgression = (namePlayer = 'Player') => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    const lengthInGame = Math.floor(Math.random() * (lengthProgression - 5) + 5);
    const startNum = Math.floor(Math.random() * 10 + 1);
    const progressionArr = [startNum];
    const progressionStep = Math.floor(Math.random() * 10 + 1);
    for (let a = 1; a <= lengthInGame - 1; a += 1) {
      progressionArr.push(startNum + a * progressionStep);
    }
    const randomCellArr = Math.floor(Math.random() * progressionArr.length);
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
      Mistake(answer, result, namePlayer);
      break;
    }
    if (i === countRounds - 1) {
      Congratulations(namePlayer);
    }
  }
};

export default gameProgression;
