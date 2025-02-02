// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let letters = str.split('')
    let chars = {}; //
    let max = 0;
    let maxChar = '' 
    letters.forEach((char) => {
        if (!chars[char]) {
            chars[char] = 1
        } else {
            chars[char]++
        }
    })
    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char]
            maxChar = char
        }
    }
    return maxChar
}



module.exports = maxChar;
