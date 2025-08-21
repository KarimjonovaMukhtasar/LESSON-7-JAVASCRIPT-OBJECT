/*
LEETCODE 415. Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
Constraints:
1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
*/
function addnumbers(num1,num2){
    let res = 0
    let n1 = []
    let n2 = []
    for(let i = 0; i < num1.length; i++){
        n1.push(num1[i])
    }
    for(let j = 0; j < num2.length; j++){
        n2.push(num2[j])
    }
    let n1new = Number(n1.join(""))
    let n2new = Number(n2.join(""))
    res = n1new + n2new
    return String(res)
}
let num1 = prompt("ENTER THE FIRST NUMBER")
let num2 = prompt("ENTER THE SECOND NUMBER")
let result = addnumbers(num1, num2)
alert(addnumbers(num1, num2))