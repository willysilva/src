import { Move } from './Move.js'
import Position from './Position.js'
import { chunkArray, stringToObject } from './utils.js'


function simulate(input) {
  const data = input.split('\n')
  const rest = data.slice(1)
  const chunks = chunkArray(rest, 2)
  const instructions = chunks.map(chunk => ({
    initialPosition: stringToObject(chunk[0]),
    commands: chunk[1].split('')
  }))

  return instructions.map(el => {
    const { x, y, d } = el.initialPosition
    const move = new Move(new Position(x, y, d))

    el.commands.forEach(command => {
      move.move(command)
    })
    return move.getPosition()
  }).join('\n')
}

export {
  simulate
}
