
// 1. Create a function that takes a string as input and returns the reversed version of the string
//  without using the built-in reverse() method.

function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  let inputStr = "hello world";
  let outputStr = reverseString(inputStr);
  console.log(outputStr);


  function reversedString(inputString){
    let reversedString = "";
    for(let i = inputString.length - 1; i>=0; i--){
        reverseString += inputString[i];
    }
    return reverseString;
  }
  let inputStr1 = "shazid karim";
  let outputStr1 = reverseString(inputStr1);
  console.log(outputStr1);

//2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] > 0) {
        sum += numbersArray[i];
      }
    }
    return sum;
  }
  let numbers = [1, -2, 3, 4, -5, 6];
  let resultOne = sumOfPositiveNumbers(numbers);
  console.log(resultOne);

//3: Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequency[element] = (frequency[element] || 0) + 1;
  
      if (frequency[element] > maxFrequency) {
        maxFrequency = frequency[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  let array = [1, 2, 3, 2, 4, 2, 5, 2];
  let resultTwo = findMostFrequentElement(array);
  console.log(resultTwo); 
  
//  4: Create a function that takes a sorted array of numbers and a target value as input. The function should 
// find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  let sortedArray = [1, 3, 5, 7, 9, 11];
  let targetValue = 10;
  let result = findTwoNumbersWithSum(sortedArray, targetValue);
  console.log(result); 
  
//5:Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input
//  and return the result of the operation.

function calculate(num1, operator, num2) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return num1 / num2;
    } else {
      throw new Error("Invalid operator");
    }
  }
  try {
    console.log(calculate(10, '+', 5));
    console.log(calculate(10, '/', 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
//6: Create a program that generates a random password of a specified length. The password should include a mix of 
// uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}[]";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  
//7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman
//  numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentSymbol = romanNumeral[i];
      const currentValue = romanNumerals[currentSymbol];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  console.log(romanToInteger("IX"));
  console.log(romanToInteger("XXI"));
  console.log(romanToInteger("LVIII"));
  console.log(romanToInteger("MCMXCIV"));
  
//8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should
//  return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element in the array");
    }
  
    return secondSmallest;
  }
  const numbersOfSecond = [5, 2, 8, 1, 3];
  console.log(findSecondSmallest(numbersOfSecond));
  