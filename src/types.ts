import { getSudoku } from 'sudoku-gen';

export type Difficulty = Parameters<typeof getSudoku>[0];
