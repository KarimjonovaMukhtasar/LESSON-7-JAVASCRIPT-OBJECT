/*
Check If It's a Title String
Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
Examples
checkTitle("A Mind Boggling Achievement") ➞ true
checkTitle("A Simple Java Script Program!") ➞ true
checkTitle("Water is transparent") ➞ false
*/
//                                          YECHIMLAR : 
/* 1-USUL
function checktitlecase(str){
        let words = str.split(" ")
        for(let word of words){
            if(word.length === 0){
                continue
            }
            if(word[0] !== word[0].toUpperCase){
                return false
            }
        }
         return true
    }
let input = prompt("Enter the sentence or a word")
if(input === null || input.trim() === ""){
    alert("ENTER THE WORD CORRECTLY")
    input = prompt("Enter the sentence or a word")
}
else{
alert(checktitlecase(input))
}
*/
/* 2-USUL:
*/
function isTitle(str){
    if(str.length === 0){
        return false
    }
    else{
        let copy = str
        let words = copy.split(" ").map(item => item.trim())
        str = words.join(" ")
        let res = []
        for(let word of words){
            let key = word[0].toUpperCase() + word.slice(1)
            res.push(key)
        }
        let newStr= res.join(" ")
        if(str === newStr){
        return true
    }
    else{
        return false
    }
    }
}
let input = prompt("Enter the sentence or a word")
alert(isTitle(input))
