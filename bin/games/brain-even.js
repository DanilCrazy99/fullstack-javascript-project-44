#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gameEven from '../../src/game-logic/logic_even.js';

const namePlayer = Greeting();
gameEven(namePlayer);
