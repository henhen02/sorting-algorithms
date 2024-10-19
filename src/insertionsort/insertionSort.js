export const insertionSort = (arr) => {
  console.time("Execution Time");
  for (let i = 1; i < arr.length; i++) {
    let currIndex = arr[i]; // assign the current index value
    let j = i - 1;
    while (j > -1 && currIndex < arr[j]) {
      arr[j + 1] = arr[j]; // move next index value one position to the right
      j--;
    }
    arr[j + 1] = currIndex; // place current index value in its correct position
  }
  console.timeEnd("Execution Time");
  console.log("Insertion Sort Result");
  console.table(arr);
};
