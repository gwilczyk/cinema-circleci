const fisherYatesShuffle = (arr) => {
  const localArray = [...arr]
  for (let i = localArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const localArray_i = localArray[i]
    localArray[i] = localArray[j]
    localArray[j] = localArray_i
  }
  return localArray
}

export default fisherYatesShuffle
