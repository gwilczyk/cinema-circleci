const numberFormatter = (number, digits) => {
  const symbolArray = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' }
  ]
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/
  let result = ''

  for (let i = 0; i < symbolArray.length; i++) {
    if (number >= symbolArray[i].value) {
      result =
        (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') + symbolArray[i].symbol
    }
  }
  return result
}

export default numberFormatter
