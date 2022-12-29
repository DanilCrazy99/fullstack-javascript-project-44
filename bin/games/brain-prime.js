#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gamePrime from '../../src/lbg_prime.js';

const namePlayer = Greeting();
gamePrime(namePlayer);
