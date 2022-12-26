import readlineSync from 'readline-sync';

const myFunc = () => {
  const namePlayer = readlineSync.question("What's your name? ");
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};

export default myFunc;
