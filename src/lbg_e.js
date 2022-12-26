// file with logic for brain game "even"

import readlineSync from 'readline-sync';

let incorrectAnswer = false;

const myFunc = (num) => {
  const myAnswer = readlineSync.question('Your answer: ');
  const answerVal = num % 2;
  let correctAnswer = '';
  if (answerVal === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (myAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    incorrectAnswer = true;
    console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
};

const Hello = () => {
  const namePlayer = readlineSync.question("What's your name? ");
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};

const gameEven = (namePlayer) => {
  for (let i = 1; i <= 3; i += 1) {
    if (!incorrectAnswer) {
      const num = Math.floor(Math.random() * 10 + Math.random() * 10);
      console.log('Question: ', num);
      myFunc(num);
      if (i === 3) console.log(`Congratulations, ${namePlayer}!`);
    }
  }
};

export { gameEven, Hello };
