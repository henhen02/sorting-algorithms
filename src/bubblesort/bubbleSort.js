export const bubbleSort = (arr) => {
  console.time("Execution Time");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // checking if current index was greater than next index
      if (arr[j] > arr[j + 1]) {
        let currIndex = arr[j]; // assign current index value into new variable
        arr[j] = arr[j + 1]; // assign next index value into current index
        arr[j + 1] = currIndex; // assign current index value into next index
      }
    }
  }
  console.timeEnd("Execution Time");
  console.log("Bubble Sort Result");
  console.table(arr);
};
