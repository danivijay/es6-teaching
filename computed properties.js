const key = 'a10';
let keyval = 'name'

setkey = (val) => {
  return 'key' + val
}

const person = {
  email: 'random@gmail.com',
  [key]: 'a number',
  [`b_${key}`]: 'an alphabet and number',
  [setkey(10)]: 'with function'
}

console.log(person.b_a10)

person