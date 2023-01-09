// logic for brain game "greatest common divisor"

import { lengthProgression } from '../games_settings.js';
import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const lengthInGame = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionArr = [startNum];
  const progressionStep = getRandomNum(1, 10);
  for (let a = 1; a < lengthInGame; a += 1) {
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
  return [question, String(result)];
};

export default () => { ENGINE(rules, generateRound); };
