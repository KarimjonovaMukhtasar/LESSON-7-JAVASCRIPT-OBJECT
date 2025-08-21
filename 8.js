/*
LEETCODE 387 Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.
Example 2:
Input: s = "loveleetcode"
Output: 2
Example 3:
Input: s = "aabb"
Output: -1
Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/
function Unique(str){
    let frequencies = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {})
    for (let index = 0; index < str.length; index++){
        if(frequencies[str[index]]=== 1){
            return index
        }
        else{
            continue
        }
    }
    return "-1"
}
let str = prompt("ENTER THE SENTENCE OR A WORD")
console.log(Unique(str))