// Bubble Sort
// ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a
// function called bubbleSort. Given an array, bubbleSort
// will sort the values in the array. The function takes 2 parameters:
// an array and an optional comparator function.

function bubbleSort(arr) {
  if (arr.length === 0) return [];

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      else if (arr[j] === arr[j + 1]) break;
    }
  }
  return console.log(arr);
}
// The comparator function is a callback that will take two values from
// the array to be compared. The function returns a negative value if the first value
// is less than the second, a positive value if the first value is greater than the second,
// and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and
// that we are sorting the values from smallest to largest.

// Bubble sort is an O(n^2) algorithm.

// Examples
// bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// bubbleSort([1, 2, 3]); // [1, 2, 3]
// bubbleSort([]);

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];

// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }

// bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
