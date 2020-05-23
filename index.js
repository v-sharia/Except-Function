const numbers = [1, 2, 3, 4, 1, 1, 2, 3];

/* Pattern 1 By Me */
function except(numbers, excluded) {
  let output = [...numbers];
  console.log(output);
  for (let i = 0; i < output.length; i++) {
    // because we are reducing the length of array as well.
    console.log(`HERE ${i}`);
    for (let j = 0; j < excluded.length; j++) {
      if (output[i] === excluded[j]) {
        output.splice(i, 1);
        // here's the trick ↓
        i--; 
        break;
      }
    }
  }
  return output;
}

/* Pattern By MOSH */
// function except(numbers, excluded) {
//     let output = [];
//     for(let el of numbers) {
//         if(!excluded.includes(el)) {
//             output.push(el);
//         }
//     }
//     return output;
// }

const output = except(numbers, [1, 2]);
console.log(output);
