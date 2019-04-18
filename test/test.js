const isNumber = require('../index')

console.log('12', isNumber(12))
console.log('12.2', isNumber(12.2))
console.log('x12.2', isNumber('x12.2'))
console.log('xacsa', isNumber('xacsa'))