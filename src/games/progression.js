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
  return progression;
};

const takeRandomNumInProgression = (progression) => {
  const progInFunc = progression;
  const randomPlaceInArr = getRandomNum(0, progInFunc.length - 1);
  const result = String(progInFunc[randomPlaceInArr]);
  progInFunc[randomPlaceInArr] = '..';
  return [result, progInFunc];
};

const generateRound = () => {
  const lenProgression = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionStep = getRandomNum(1, 10);
  const progression = generateProgression(startNum, lenProgression, progressionStep);
  const [result, finallyProgression] = takeRandomNumInProgression(progression);
  const question = finallyProgression.join(' ');
  return [question, result];
};

export default () => { engine(rules, generateRound); };
