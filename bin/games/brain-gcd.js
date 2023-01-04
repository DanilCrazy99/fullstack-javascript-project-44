#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gameGCD from '../../src/game-logic/logic_gcd.js';

const namePlayer = Greeting();
gameGCD(namePlayer);
