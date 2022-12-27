#!/usr/bin/env node
import { Greeting } from '../../src/cli.js';
import gameEven from '../../src/lbg_even.js';

const namePlayer = Greeting();
gameEven(namePlayer);
