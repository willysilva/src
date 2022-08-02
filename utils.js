


function stringToObject (str) {
  const props = str.split(' ')
  const position = {
    x: Number(props[0]),
    y: Number(props[1]),
    d: props[2]
  }

  return position
}

function chunkArray (array, size) {
  return array.reduce((acc, cur, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [])
}


export {
  stringToObject,
  chunkArray
}
