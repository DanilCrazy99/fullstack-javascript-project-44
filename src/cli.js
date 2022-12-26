import readlineSync from 'readline-sync';

const myFunc = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question("What's your name? ");
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};

export default myFunc;
