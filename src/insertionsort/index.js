import { insertionSort } from "./insertionsort.js";
import { optimizedInsertionSort } from "./optimizedinsertionsort.js";
let myNumber = [4, 5, 1, 3, 7, 6, 8, 2, 10, 9];

console.log("Orginal");
console.table(myNumber);
console.log("=============================");
insertionSort(myNumber);
console.log("=============================");
optimizedInsertionSort(myNumber);
