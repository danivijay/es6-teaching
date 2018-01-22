class Person {
  constructor (name, age) {
    this.name = name,
    this.age = age
  }
  sentence() {
    console.log(`${this.name} is ${this.age} years old`) 
  }
  getName() {
    return this.name
  }
}

class Employee extends Person {
  constructor (name, age, job, years) {
    super(name, age)
    this.job = job,
    this.years = years
  }
  quit() {
    console.log('I quit my job')
    this.years = 0
  }
  getName() {
    return super.getName()  + '!'
  }
}


// old

// var Person = function (name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.sentence = function () {
//   console.log(`${this.name} is ${this.age} years old`) 
// }

var dani = new Employee('dani', 24, 'programmer', 2)
var don = new Person('don', 28)

dani

dani.sentence()
don.sentence()

dani.quit()
dani

console.log(dani.getName())


