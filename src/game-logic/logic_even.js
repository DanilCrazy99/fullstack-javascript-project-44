// file with logic for brain game "even"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../cli.js';
import { countRounds } from '../games_settings.js';
import getRandomNum from '../utils.js';

let incorrectAnswer = false;

const answerToQuestion = (num) => {
  const answer = readlineSync.question('Your answer: ');
  const answerVal = num % 2;
  let result = '';
  if (answerVal === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  if (answer === result) {
    console.log('Correct!');
  } else {
    incorrectAnswer = true;
    Mistake(result, answer);
  }
};

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < countRounds; i += 1) {
    if (!incorrectAnswer) {
      const num = getRandomNum(1, 20);
      console.log(`Question: ${num}`);
      answerToQuestion(num);
      if (i === countRounds - 1) Congratulations();
    }
  }
};

export default gameEven;
