import { bubbleSort } from "./bubbleSort.js";
import { optimizedBubbleSort } from "./optimizedBubbleSort.js";

let myNumber = [4, 5, 1, 3, 7, 6, 8, 2, 10, 9];
console.log("Original");
console.table(myNumber);
console.log("=============================");
bubbleSort(myNumber);
console.log("=============================");
optimizedBubbleSort(myNumber);
