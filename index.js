function isNumber(number) {
  number = parseFloat(number)
  return number === number && typeof number === 'number' 
}

module.exports = isNumber