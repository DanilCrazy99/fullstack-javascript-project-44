// file with logic for brain game "calc"

import getRandomNum from '../utils.js';
import engine from '../index.js';

const rulesGame = 'What is the result of the expressionSign?';

const getRandomOperators = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNum(0, operators.length - 1)];
};

const calculation = (firstNum, secondNum, expressionSign) => {
  switch (expressionSign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Operator ${expressionSign} - is incorrect`);
  }
};

const generateRound = () => {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const expressionSignInThisRound = getRandomOperators();
  const result = calculation(firstNum, secondNum, expressionSignInThisRound);
  return [`${firstNum} ${expressionSignInThisRound} ${secondNum}`, String(result)];
};

export default () => { engine(rulesGame, generateRound); };
