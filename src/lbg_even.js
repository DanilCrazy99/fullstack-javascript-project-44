// file with logic for brain game "even"

import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from './index.js';
import countRounds from './games_settings.js';

let incorrectAnswer = false;

const answerToQuestion = (num, namePlayer) => {
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
    Mistake(namePlayer, answer, result);
  }
};

const gameEven = (namePlayer) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    if (!incorrectAnswer) {
      const num = Math.floor(Math.random() * 10 + Math.random() * 10);
      console.log('Question: ', num);
      answerToQuestion(num, namePlayer);
      if (i === countRounds - 1) Congratulations(namePlayer);
    }
  }
};

export default gameEven;
