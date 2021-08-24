// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++){
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}
capitalize('look, it is working!')

module.exports = capitalize;

//favorite solution to this problem
// function capitalize(str) {
//     const newString = []
//     for (word of str.split(' ')) {
//         newString.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return newString.join(' ')
    
// }


//my solution
// function capitalize(str) {
//     let newString = []
//     let words = str.split(' ')
//     words.forEach((word) => {
//         let a = word[0].toUpperCase()
//         let b = word.slice(1)
//         let c = a.concat(b)
//         newString.push(c)
//     })
//     return newString.join(' ')
// }