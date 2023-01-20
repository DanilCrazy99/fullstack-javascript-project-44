// file with logic for brain game "even"

import getRandomNum from '../utils.js';
import engine from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2) {
    return false;
  }
  return true;
};

const generateRound = () => {
  const num = getRandomNum(1, 20);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => { engine(rulesGame, generateRound); };
