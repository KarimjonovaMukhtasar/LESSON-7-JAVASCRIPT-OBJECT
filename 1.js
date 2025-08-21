/*
Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
Assume that the following array of drink objects needs to be sorted:
Array ichida object bo'lsin objectlarni price bo'yicha sort qiladigan algorithm tuzing!
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:
Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/
function sortproducts(arr){
  let res = arr.sort((a, b) => a.price - b.price);
  return res
}
let n = Number(prompt("NECHTA OBJECT KIRITASIZ???"))
let arr = []
for (let i = 0; i < n; i++){
  product = {}
  product.name = prompt("MAHSULOT NOMINI KIRITING")
  product.price = Number(prompt("MAHSULOT NARXINI KIRITING"))
  arr.push(product)
}
console.log(sortproducts(arr))