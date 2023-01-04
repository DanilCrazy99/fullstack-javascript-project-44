#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import CalcGame from '../../src/game-logic/logic_calc.js';

const namePlayer = Greeting();
CalcGame(namePlayer);
