#!/usr/bin/env node
import { Greeting } from '../../src/index.js';
import gameProgression from '../../src/game-logic/logic_progression.js';

const namePlayer = Greeting();
gameProgression(namePlayer);
