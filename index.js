import { simulate } from './simulator.js'
import { readFile } from 'fs';

// readFile('./commands.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     const solution = simulate(data)
//     console.log(solution)
// });

const input = 
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const data = simulate(input);
console.log(data)