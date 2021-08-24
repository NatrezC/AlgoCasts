// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = str.split('').reverse().join('')
    console.log(reversed)
    if (reversed == str) {
        console.log(reversed, 'is ', str)
        return true
    } else {
        console.log(reversed, 'is not', str)
        return false;
    }
}



module.exports = palindrome;

//Another solution

// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }

// module.exports = palindrome;