let size = 5;

function createCanvas(size){
  let arr = [];
  let finalArr = [];
  for (let i = 0; i < size; i++){
    arr.push(false);
  }
    for (let j = 0; j < size; j++){
      finalArr.push(arr);
    }
  console.log(finalArr);
  return finalArr;
}

// function createCanvas (size) {
//  let arr = Array(size).fill(0)
//   for (let i = 0; i < size; i++) {
//     arr[i] = Array(size).fill(false)
//   }
//   return arr
//   console.log(arr);
// }

module.exports = createCanvas
