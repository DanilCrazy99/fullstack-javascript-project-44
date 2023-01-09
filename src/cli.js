import readlineSync from 'readline-sync';

// Приветствие игрока
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
};

export default Greeting;
