let lastIndexOf = (array, value) => {
  let correctIndex = -1;
  for(let i = array.length - 1; i >= 0; i--){
    if(array[i] === value){
      correctIndex = i;
      break;
    } else if(array.length === 0) {
      correctIndex = -1;
    } else if(array[i] !== value) {
      correctIndex = -1;
    }
  }
  return correctIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);