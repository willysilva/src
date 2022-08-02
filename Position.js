class Position {

  constructor (x, y, d) {
    this.x = x
    this.y = y
    this.d = d
  }

  toString () {
    return `${this.x} ${this.y} ${this.d}`
  }
}

export default Position
