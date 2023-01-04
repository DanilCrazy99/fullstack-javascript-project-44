// file with logic for brain game "calc"
import readlineSync from 'readline-sync';
import { Mistake, Congratulations } from '../index.js';
import { countRounds } from '../games_settings.js';

const gameCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i <= countRounds - 1; i += 1) {
    let result = 0;
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const expressionNumber = Math.floor(Math.random() * 3 + 1); // 1 = +; 2 = -; 3 = *
    if (expressionNumber === 1) {
      console.log(`Question: ${firstNum} + ${secondNum}`);
      result = firstNum + secondNum;
    } else if (expressionNumber === 2) {
      console.log(`Question: ${firstNum} - ${secondNum}`);
      result = firstNum - secondNum;
    } else if (expressionNumber === 3) {
      console.log(`Question: ${firstNum} * ${secondNum}`);
      result = firstNum * secondNum;
    }
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== result) {
      Mistake(answer, result);
      break;
    }
    console.log('Correct!');
    if (i === countRounds - 1) {
      Congratulations();
    }
  }
};

export default gameCalc;