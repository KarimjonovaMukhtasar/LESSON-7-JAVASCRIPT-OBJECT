/*
ES6: Destructuring Objects X
Given an array of user objects.
function yarating u array ichida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin
let names = []
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
for( add code inside these parenthesis only ) {
      names.push(name)
}
console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
*/
function names(arr){
  let res = []
  for (let key of arr){
    res.push(key.name)
  }
  return res
}
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
console.log(names(users))
