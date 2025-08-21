/*
 Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.
Examples
doubleChar("String") ➞ "SSttrriinngg"
doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
doubleChar("1234!_ ") ➞ "11223344!!__  "
*/
function duplicateEach(str){
    let res = ""
    for(let key of str){
        res = res+key.repeat(2)
    }
    return res
}
let input = prompt("ENTER THE SENTENCE OR A WORD")
let result = duplicateEach(input)
alert(result)