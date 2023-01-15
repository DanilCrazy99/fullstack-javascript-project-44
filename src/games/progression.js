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
  return progressionArr;
};

const findMissingElement = (arrProgression) => {
  const arrWithMissingNum = arrProgression;
  const randomCellArr = getRandomNum(0, arrProgression.length - 1);
  const result = String(arrProgression[randomCellArr]);
  arrWithMissingNum[randomCellArr] = '..';
  return [result, arrWithMissingNum];
};

const normalString = (arrQuestion) => {
  let question = '';
  for (let a = 0; a < arrQuestion.length; a += 1) {
    question += arrQuestion[a];
    if (a < arrQuestion.length - 1) {
      question += ' ';
    }
  }
  return question;
};

const generateRound = () => {
  const lenProgression = getRandomNum(5, lengthProgression);
  const startNum = getRandomNum(1, 10);
  const progressionStep = getRandomNum(1, 10);
  const progressionArr = generateProgression(startNum, lenProgression, progressionStep);
  const [result, arrMissNum] = findMissingElement(progressionArr);
  const question = normalString(arrMissNum);
  return [question, result];
};

export default () => { engine(rules, generateRound); };
