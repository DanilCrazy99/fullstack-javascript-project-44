#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gamePrime from '../../src/game-logic/logic_prime.js';

const namePlayer = Greeting();
gamePrime(namePlayer);
