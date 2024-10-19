export const optimizedBubbleSort = (arr) => {
  console.time("Execution Time");
  for (let i = 0; i < arr.length; i++) {
    let isSwaped = false; // use conditioning to stop the loop early if it has no swap
    for (let j = 0; j < arr.length - i - 1; j++) {
      // checking elements of current index and next index
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swaping between current index and next index
        isSwaped = true; // change swap status into true
      }
    }
    if (!isSwaped) {
      // checking swap status
      break; // if swap status still false, stop loop
    }
  }
  console.timeEnd("Execution Time");
  console.log("Optimized Bubble Sort Result");
  console.table(arr);
};

/*
What is optimized in this code?

This code will automatically stop looping when it no need.
In the sense that the array is sorted, that way we can save
resources and the time needed to get the results.
*/
