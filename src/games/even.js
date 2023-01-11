// file with logic for brain game "even"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumIsEven = (num) => {
  let result = '';
  if (num % 2) {
    result = 'no';
  } else {
    result = 'yes';
  }
  return result;
};

const generateRound = () => {
  const num = getRandomNum(1, 20);
  return [num, checkNumIsEven(num)];
};

export default () => { ENGINE(rulesGame, generateRound); };
