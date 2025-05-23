/**
 * ===================================================
 * 1️⃣ Find the Temperature
 * ===================================================
 * Find the temperature closest to zero in an array.
 *
 * Example:
 * Input: findTemperature([7, -10, 13, 8, -2])
 * Output: -2
 */
function findTemperature(temps) {
  // Your code here
}

/**
 * ===================================================
 * 2️⃣ Robotic Packages Classifier
 * ===================================================
 * Classify packages based on weight: "Light", "Medium", "Heavy".
 *
 * Example:
 * Input: classifyPackage(5)
 * Output: "Light"
 */
function classifyPackage(weight) {
  // Your code here
}

/**
 * ===================================================
 * 3️⃣ Interlocked Blocks - Easy
 * ===================================================
 * Check if blocks can fit together (e.g., Tetris-like check).
 *
 * Example:
 * Input: areBlocksInterlocked([1,0,1],[0,1,0])
 * Output: true
 */
function areBlocksInterlocked(blockA, blockB) {
  // Your code here
}

/**
 * ===================================================
 * 4️⃣ Moving Atoms on a Grid
 * ===================================================
 * Calculate final position after moving atoms in given directions.
 *
 * Example:
 * Input: moveAtoms({x:0,y:0}, ['up', 'up', 'left'])
 * Output: { x: -1, y: 2 }
 */
function moveAtoms(position, moves) {
  // Your code here
}

/**
 * ===================================================
 * 5️⃣ Check a Sudoku Grid (and Output the First Error)
 * ===================================================
 * Validate Sudoku and return the first error found.
 *
 * Example:
 * Input: validateSudoku(grid)
 * Output: { error: 'Row 2 has duplicates' }
 */
function validateSudoku(grid) {
  // Your code here
}

/**
 * ===================================================
 * 6️⃣ Check a Sudoku Grid (Simple)
 * ===================================================
 * Return true if the grid is valid.
 *
 * Example:
 * Input: isValidSudoku(grid)
 * Output: true
 */
function isValidSudoku(grid) {
  // Your code here
}

/**
 * ===================================================
 * 7️⃣ Finding the Largest Profit
 * ===================================================
 * Find the largest profit possible by buying/selling once.
 *
 * Example:
 * Input: largestProfit([7,1,5,3,6,4])
 * Output: 5
 */
function largestProfit(prices) {
  // Your code here
}

/**
 * ===================================================
 * 8️⃣ Gears Rotation Direction
 * ===================================================
 * Determine if connected gears will rotate properly.
 *
 * Example:
 * Input: gearRotation(['clockwise', 'counter'])
 * Output: true
 */
function gearRotation(directions) {
  // Your code here
}

/**
 * ===================================================
 * 9️⃣ Parse a Robots.txt File
 * ===================================================
 * Parse lines to extract disallowed paths.
 *
 * Example:
 * Input: parseRobots(['Disallow: /admin', 'Allow: /public'])
 * Output: ['/admin']
 */
function parseRobots(lines) {
  // Your code here
}

/**
 * ===================================================
 * 🔟 Red Envelopes
 * ===================================================
 * Distribute money fairly into N envelopes.
 *
 * Example:
 * Input: distributeMoney(100, 3)
 * Output: [34, 33, 33]
 */
function distributeMoney(total, envelopes) {
  // Your code here
}

/**
 * ===================================================
 * 11️⃣ Factorize String Extremities
 * ===================================================
 * Get first and last characters of a string.
 *
 * Example:
 * Input: factorizeEnds("hello")
 * Output: "ho"
 */
function factorizeEnds(str) {
  const first = str[0];
  const last = str[str.length - 1];
  return `${first}${last}`;
}
// factorizeEnds("hello");

/**
 * ===================================================
 * 12️⃣ Split a String with Simple and Double Quotes
 * ===================================================
 * Split a string while respecting quotes.
 *
 * Example:
 * Input: splitWithQuotes('one "two words" three')
 * Output: ['one', 'two words', 'three']
 */
function splitWithQuotes(str) {
  // why not work
  const spaceStr = str.split(" ");
  for (let i = 0; i < spaceStr.length; i++) {
    const word = spaceStr[i];
    if (word.includes("")) {
      word.replace(/["'][\w\s]+["']|\w+["']\w+/);
    }
  }
  console.log(spaceStr);
}
splitWithQuotes('one "two words" three');
/**
 * ===================================================
 * 13️⃣ [JS] Combination Options in a Tournament
 * ===================================================
 * Return number of ways players can be matched.
 *
 * Example:
 * Input: combinations(4)
 * Output: 6
 */
function combinations(players) {
  // Your code here
}

/**
 * ===================================================
 * 14️⃣ [JS] Move Towards Zero
 * ===================================================
 * Reduce a number step by step toward zero.
 *
 * Example:
 * Input: moveToZero(5)
 * Output: [5,4,3,2,1,0]
 */
function moveToZero(num) {
  const arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  console.log(arr);
}

// moveToZero(5);

/**
 * ===================================================
 * 15️⃣ Merge Fields from Different Sources
 * ===================================================
 * Merge multiple objects into one.
 *
 * Example:
 * Input: mergeFields({a:1}, {b:2})
 * Output: {a:1, b:2}
 */
function mergeFields(...sources) {
  // dont know
}

mergeFields({ a: 1 }, { b: 2 });

/**
 * ===================================================
 * 16️⃣ Summer Sales
 * ===================================================
 * Apply a discount to all items.
 *
 * Example:
 * Input: applyDiscount([100, 200], 10)
 * Output: [90, 180]
 */
function applyDiscount(prices, percent) {
  const newPrices = prices.map((price) => price - price / percent);
  return newPrices;
}
// applyDiscount([100, 200], 10);
/**
 * ===================================================
 * 17️⃣ The Trick of Mixing the Letters Inside a Word
 * ===================================================
 * Shuffle internal letters of a word (keep first/last).
 *
 * Example:
 * Input: mixWord("developer")
 * Output: "dveeloper"
 */
function mixWord(word) {
  // didnt understand
}
mixWord("developer");

/**
 * ===================================================
 * 18️⃣ Anagrams
 * ===================================================
 * Check if two strings are anagrams.
 *
 * Example:
 * Input: areAnagrams("listen", "silent")
 * Output: true
 */
function areAnagrams(a, b) {
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < a.length; i++) {
    const el = a[i];
    obj1.hasOwnProperty(obj1[el]) ? obj1[el]++ : (obj1[el] = 1);
  }

  for (let i = 0; i < b.length; i++) {
    const el = b[i];
    obj2.hasOwnProperty(obj2[el]) ? obj2[el]++ : (obj2[el] = 1);
  }

  for (const [key] of Object.entries(obj1)) if (obj1[key] !== obj2[key]) return false;

  return true;
}

// areAnagrams("listen", "silent");

/**
 * ===================================================
 * 19️⃣ Group Bytes by Chunks, Then Calculate the Checksums
 * ===================================================
 * Group array in chunks of N, return sum per chunk.
 *
 * Example:
 * Input: groupAndSum([1,2,3,4,5,6], 2)
 * Output: [3,7,11]
 */
function groupAndSum(arr, size) {
  // dont know guid me
}

/**
 * ===================================================
 * 20️⃣ Intervals
 * ===================================================
 * Merge overlapping intervals.
 *
 * Example:
 * Input: mergeIntervals([[1,3],[2,6],[8,10]])
 * Output: [[1,6],[8,10]]
 */
function mergeIntervals(intervals) {
  // Your code here
  // didnt understand this one please explain
}

/**
 * ===================================================
 * 21️⃣ Kid Addition Check
 * ===================================================
 * Validate if sum of two numbers equals the expected answer.
 *
 * Example:
 * Input: kidAddition(2,2,4)
 * Output: true
 */
function kidAddition(a, b, expected) {
  if (a + b === expected) return true;
  return false;
}

// kidAddition(2, 2, 4);

/**
 * ===================================================
 * 22️⃣ Duodigits
 * ===================================================
 * Check if number contains only two different digits.
 *
 * Example:
 * Input: isDuodigit(121212)
 * Output: true
 */
function isDuodigit(num) {
  const obj = {};

  const arr = num.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    obj.hasOwnProperty(arr[i]) ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  }

  if (Object.keys(obj).length > 2) return false;

  return true;
}
// isDuodigit(121212);
/**
 * ===================================================
 * 23️⃣ [JS] Apply or Spread
 * ===================================================
 * Call a function using apply or spread.
 *
 * Example:
 * Input: callSum(sum, [1,2,3])
 * Output: 6
 */
function callSum(fn, args) {
  // Your code here
}

/**
 * ===================================================
 * 24️⃣ Summing Based on Factors
 * ===================================================
 * Sum numbers in array that are factors of a target.
 *
 * Example:
 * Input: sumFactors([1,2,3,4], 6)
 * Output: 6
 */
function sumFactors(arr, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) {
        return sum;
      }
    }
  }
}
// sumFactors([1, 2, 3, 4], 6);
/**
 * ===================================================
 * 25️⃣ Array Index
 * ===================================================
 * Return index of an item or -1.
 *
 * Example:
 * Input: findIndex([1,2,3], 2)
 * Output: 1
 */
function findIndex(arr, target) {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    target < arr[mid] ? (right = mid - 1) : (left = mid + 1);
  }
  return -1;
}
// findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
/**
 * ===================================================
 * 26️⃣ [JS] Array.map Pitfall
 * ===================================================
 * Explain why map might not work as expected and fix it.
 *
 * Example:
 * Input: fixMap([1,2,3])
 * Output: [2,4,6]
 */
function fixMap(arr) {
  // map wont work if i dont assign it to a variable and not returning it
  const dupArr = arr.map((n) => n * n);
  return dupArr;
}

/**
 * ===================================================
 * 27️⃣ [JS] Correction
 * ===================================================
 * Correct a broken function.
 *
 * Example:
 * Input: correction([1,2,3])
 * Output: [1,4,9]
 */
function correction(arr) {
  const dupArr = arr.map((n) => n * n);
  return dupArr;
}
// correction([1, 2, 3]);

/**
 * ===================================================
 * 28️⃣ [JS] Average
 * ===================================================
 * Calculate the average of numbers.
 *
 * Example:
 * Input: average([1,2,3])
 * Output: 2
 */
function average(arr) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
// average([1, 2, 3]);

/**
 * ===================================================
 * 29️⃣ (REPEAT TASKS – Already Above)
 * ===================================================
 * A Mysterious Diary, Secret Messages, Word Frequencies,
 * Convert Bytes to Kibibytes or Mebibytes, etc.
 * (See previous block for those implementations)
 */
