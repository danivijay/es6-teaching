// Default Params

let buy = function (item = 'fish', prize = 10) {
  item
  prize
}

buy('egg', 20)

//Eg: 2
function multiplyBy2(base, ...numbers) {
  return numbers.map(number => number * 2 + base)
}

const answer = multiplyBy2(100, 1, 5, 20, 10);

console.log(answer);