import {simulate} from '../simulator.js'

test('testing simulate', () => {
const input = 
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`

const data = simulate(input);
expect(data.trim()).toBe(`1 3 N
5 1 E`);
  });
