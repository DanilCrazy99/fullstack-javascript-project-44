import readlineSync from 'readline-sync';

const myFunc = () => {
  const name = readlineSync.question("What's your name? ");
  console.log(`Hello, ${name}!`);
};

export default myFunc;
