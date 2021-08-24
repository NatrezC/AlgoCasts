// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0;
    //you can have your checker into one string like 'aeiou' but best practice would be like this
    const checker = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            counter++;
        }
    }
    return counter;
}

//RegEx method
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }





//My solution
// function vowels(str) {
//         let vowels = ['a', 'e', 'i', 'o', 'u'];
//         let counter = 0;
//         let letters = str.toLowerCase().split('');
//         letters.forEach((letter) => {
//                 vowels.forEach((v) => {
//                     if (letter == v) {
//                         counter++;
//                     }
//                 })
//         })
//         return counter;
                
// }
module.exports = vowels;