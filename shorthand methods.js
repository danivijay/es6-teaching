// shorthabnd method instead of birthday: function() {}

const person = {
  name: 'dani',
  age: 25,
  birthday () {
    this.age++
  }
}

person.birthday()

console.log(person.age)
