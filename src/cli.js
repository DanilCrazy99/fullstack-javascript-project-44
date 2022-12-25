import readlineSync from 'readline-sync';

const myFunc = () => {
  const name = readlineSync.question('Как тебя зовут? ');
  console.log(`Hello, ${name}!`);
};

export default myFunc;
