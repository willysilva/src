import { chunkArray, stringToObject } from '../utils.js';

test('testing chunkArray', () => {
  const input = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']
  const data = chunkArray(input, 2)
  expect(data).toStrictEqual( [['1 2 N', 'LMLMLMLMM'], ['3 3 E', 'MMRMMRMRRM']]);
  });

  test('testing StringToObject',() => {

    const input = '1 2 N'
    const data = stringToObject(input);
    expect(data).toStrictEqual({ x: 1, y: 2, d: 'N' })
  })