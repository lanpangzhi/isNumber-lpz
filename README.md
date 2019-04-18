# 验证是否是Number 支持字符串

```
npm i isnumber-lpz

const isNumber = require('isnumber-lpz')

console.log('12', isNumber(12))   true
console.log('12.2', isNumber(12.2))    true
console.log('x12.2', isNumber('x12.2'))   false
console.log('xacsa', isNumber('xacsa'))   false
```