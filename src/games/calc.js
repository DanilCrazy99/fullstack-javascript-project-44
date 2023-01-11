// file with logic for brain game "calc"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const rulesGame = 'What is the result of the expressionSign?';

const getRandomexpressionSign = () => {
  const expressionSignArr = ['+', '-', '*'];
  return expressionSignArr[getRandomNum(0, expressionSignArr.length - 1)];
};

const calculation = (firstNum, secondNum, expressionSign) => {
  let result = 0;
  switch (expressionSign) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      throw new Error(`Operator ${expressionSign} - is incorrect`);
  }
  return result;
};

const generateRound = () => {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const expressionSignInThisRound = getRandomexpressionSign();
  const result = calculation(firstNum, secondNum, expressionSignInThisRound);
  return [`${firstNum} ${expressionSignInThisRound} ${secondNum}`, String(result)];
};

export default () => { ENGINE(rulesGame, generateRound); };
