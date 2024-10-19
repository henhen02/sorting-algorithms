const binarySearch = (arr, item, low, high) => {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // calculate the middle index
    if (arr[mid] === item)
      return (
        mid + 1
      ); // if the middle element is equal to 'item', return the next position
    else if (arr[mid] < item)
      low =
        mid +
        1; // If the middle element is less than 'item', search in the right half
    else high = mid - 1; // If the middle element is greater than 'item', search in the left half
  }
  return low;
};

export const optimizedInsertionSort = (arr) => {
  console.time("Execution Time");
  for (let i = 1; i < arr.length; i++) {
    let currIndex = arr[i]; // assign the current index value
    let j = i - 1;
    let pos = binarySearch(arr, currIndex, 0, j); // find the correct position for 'currIndex' using binary search
    while (j >= pos) {
      // shift elements to the right to make space for 'currIndex'
      arr[j + 1] = arr[j]; // move current index value into next index value
      j--;
    }
    arr[j + 1] = currIndex; // place current index into next index
  }
  console.timeEnd("Execution Time");
  console.log("Optimized Insertion Sort Result");
  console.table(arr);
};
