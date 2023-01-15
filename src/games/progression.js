// logic for brain game "greatest common divisor"

import { lengthProgression } from '../games_settings.js';
import getRandomNum from '../utils.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (startNum, lenProgression, steps) => {
  const progressionArr = [startNum];
  for (let a = 1; a < lenProgression; a += 1) {
    progressionArr.push(startNum + a * steps);
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
  return [question, result];
};

const generateRound = () => {
  const lenProgression = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionStep = getRandomNum(1, 10);
  const [question, result] = String(generateProgression(startNum, lenProgression, progressionStep));
  return [question, result];
};

export default () => { engine(rules, generateRound); };
