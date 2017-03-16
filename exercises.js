//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    //if they are the same return either one
    return x;
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  if (language === 'German') {
    //language: 'German' -> 'Guten Tag!'
    return 'Guten Tag!';
  } else if (language === 'English') {
    //language: 'English' -> 'Hello!'
    return 'Hello!';
  } else if (language === 'Spanish') {
    //language: 'Spanish' -> 'Hola!'
    return 'Hola!';
  } else {
    //if language is undefined return 'Hello!'
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  if (num === 10 || num === 5) {
    return true;
  } else {
    //otherwise return false
    return false;
  }
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  if (Number.isInteger(num)) {
    return true;
  } else {
    //otherwise return false
    return false;
  }
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    //if num is divisible by 3 & 5 return 'fizzbuzz'
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    //if num is divisible by 3 return 'fizz'
    return 'fizz';
  } else if (num % 5 === 0) {
    //if num is divisible by 5 return 'buzz'
    return 'buzz';
  } else {
    //otherwise return num
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (var i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  //return the array
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  arr.push(item);
  //return the array
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  arr.unshift(item);
  //return the array
  return arr;
  //hint: use the array method .unshift
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  return arr.includes(item);
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var average = 0;
  for (var i = 0; i < testScores.length; i++) {
    average += testScores[i];
  }
  average /= testScores.length;
  return average;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var bigNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigNumber) {
      bigNumber = numbers[i];
    }
  }
  return bigNumber;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
