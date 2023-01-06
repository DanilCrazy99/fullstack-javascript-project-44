#!/usr/bin/env node
import { Greeting } from '../../src/cli.js';
import gameEven from '../../src/game-logic/logic_even.js';

const namePlayer = Greeting();
gameEven(namePlayer);
