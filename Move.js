const cardinal = ['N', 'E', 'S', 'W']

function turnLeft(position) {
  const index = position.d === 'N'
    ? 3
    : cardinal.indexOf(position.d) - 1
  return index;
}

function turnRight(position) {
  const index =
    position.d === 'W'
      ? 0
      : cardinal.indexOf(position.d) + 1
  return index;
}

class Move {
  constructor(initialPosition) {
    this.position = initialPosition
  }

  move(command) {
    switch (command) {
      case 'L':
        const newPositionLeft = turnLeft(this.position);
        this.position.d = cardinal[newPositionLeft]
        break

      case 'R':
        const newPositionRight = turnRight(this.position)
        this.position.d = cardinal[newPositionRight]
        break
      
      case 'M':
        switch (this.position.d) {
          case 'N':
            this.position.y = this.position.y + 1
            break
          case 'E':
            this.position.x = this.position.x + 1
            break
          case 'S':
            this.position.y = this.position.y - 1
            break
          case 'W':
            this.position.x = this.position.x - 1
            break
          default:
            throw new Error(
              'Positions must be one of "W, N, E, S"'
            )
        }
        break
        default:
          throw new Error("I don't understand this command :(")
    }
  }
  getPosition() {
    return this.position.toString()
  }
}

export {
  Move
}

