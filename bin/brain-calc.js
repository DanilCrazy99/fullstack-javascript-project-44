#!/usr/bin/env node
import { Greeting } from '../src/cli.js';
import CalcGame from '../src/lbg_calc.js';

const namePlayer = Greeting();
CalcGame(namePlayer);
