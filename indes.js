let array = [1,32,3,14]
let another_array = [1,14]

function isValidSubsequence(array, sequence) {
  let index = 0
  
  for(el of array) {
    if(el === sequence[index]) {
      index++
    }
  }

  return index === sequence.length
}

console.log(isValidSubsequence(array,another_array))

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;