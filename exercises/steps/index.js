// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    //if n equals row we have reached the end
    if (n === row) {
        return;
    }
    //if 'stair' string has length, we are at the end of the row
    if (n === stair.length) {
        console.log(stair);
        //call steps again
        steps(n, row + 1);
        return;
    }
    
    //if stair is less than or equal to row
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' '
    }
    steps(n, row, stair);

}
steps(5)
module.exports = steps;

//my solution
// function steps(n) {
//     for (let i = 0; i < n; i++){
//         let stairs = ''
//         for (let j = 0; j < n; j++){
//             if (i >= j) {
//                 stairs += '#'
//             } else {
//                 stairs += ' '
//             }
//         }
//         console.log(stairs)
//     }
// }
