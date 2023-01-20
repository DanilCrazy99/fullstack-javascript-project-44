// logic for brain game "greatest common divisor"

import { lengthProgression } from '../games_settings.js';
import getRandomNum from '../utils.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (startNum, lenProgression, steps) => {
  const progression = [startNum];
  for (let a = 1; a < lenProgression; a += 1) {
    progression.push(startNum + a * steps);
  }
  const randomPlaceInArr = getRandomNum(0, progression.length - 1);
  const result = String(progression[randomPlaceInArr]);
  progression[randomPlaceInArr] = '..';
  return [progression, result];
};

const generateRound = () => {
  const lenProgression = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionStep = getRandomNum(1, 10);
  const [progression, result] = generateProgression(startNum, lenProgression, progressionStep);
  const question = progression.join(' ');
  return [question, result];
};

export default () => { engine(rules, generateRound); };
