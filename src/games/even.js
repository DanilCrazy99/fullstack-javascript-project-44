// file with logic for brain game "even"

import getRandomNum from '../utils.js';
import ENGINE from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  let result = '';
  const num = getRandomNum(1, 20);
  if (num % 2) {
    result = 'no';
  } else {
    result = 'yes';
  }
  return [num, result];
};

export default () => { ENGINE(rulesGame, generateRound); };
