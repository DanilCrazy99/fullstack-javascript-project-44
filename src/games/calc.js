// file with logic for brain game "calc"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const rulesGame = 'What is the result of the expression?';

const generateRound = () => {
  let result = 0;
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const expressionArr = ['+', '-', '*'];
  const expressionNumber = getRandomNum(0, 2); // 1 = +; 2 = -; 3 = *
  switch (expressionNumber) {
    case 0:
      result = firstNum + secondNum;
      break;
    case 1:
      result = firstNum - secondNum;
      break;
    case 2:
      result = firstNum * secondNum;
      break;
    default:
      console.log('Some error');
      break;
  }
  return [`${firstNum} ${expressionArr[expressionNumber]} ${secondNum}`, String(result)];
};

export default () => { ENGINE(rulesGame, generateRound); };
