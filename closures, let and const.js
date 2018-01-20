const max = 10
let maxima = 30

function maxim () {
  let maxo = []
  for (let i = 0; i < max; i++) {
    maxima += maxima
    maxo[i] = maxima
  }
  return maxo
}

console.log(maxim())