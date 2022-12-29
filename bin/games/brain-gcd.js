#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gameGCD from '../../src/lbg_gcd.js';

const namePlayer = Greeting();
gameGCD(namePlayer);
