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
  const randomPlaceInArr = getRandomNum(0, progressionArr.length - 1);
  const result = String(progressionArr[randomPlaceInArr]);
  progressionArr[randomPlaceInArr] = '..';
  return [progressionArr, result];
};

const generateRound = () => {
  const lenProgression = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionStep = getRandomNum(1, 10);
  const [progressionArr, result] = generateProgression(startNum, lenProgression, progressionStep);
  const question = progressionArr.join(' ');
  return [question, result];
};

export default () => { engine(rules, generateRound); };
