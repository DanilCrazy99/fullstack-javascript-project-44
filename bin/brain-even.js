#!/usr/bin/env node
import gameEven from '../src/lbg_even.js';
import Hello from '../src/cli.js';

const namePlayer = Hello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEven(namePlayer);
