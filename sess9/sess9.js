// const array = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];
// array.sort((a, b) => a.age - b.age);
// console.log(array);
// let myName = "Onkar";
// let obj = {
//   name: myName,
//   myName: "Crio",
// }
// console.log(obj);

// const { access } = require("fs");

// // let arr = [1,2,3,4,5];
// let arr2 = [
//   {name: "Hira", age: 25},
//   {name: "PC", age: 24},
//   {name: "Chair", age: 25},
//   {name: "Keyboard", age: 25},
//   {name: "Chair", age: 25}
// ]

// ------------------For Each array method----------------------
// let result;
// arr2.forEach((ele, ind, arr) => result = arr);
// console.log(result);

// ------------------find array method--------------------------
// console.log(arr2.find((ele, ind) => {
//   if(ele.name === "Chair"){}
//     return ele;
// }));
// console.log(arr2[4]["name"]);

// ------------------------array sort------------------------------
// function sortNumerically(arr) {
//   // You only need to implement this function.

//   return  arr.sort((a,b) => a-b);
// }
// var arr3 = [20, 10, 50, 60];
// console.log(sortNumerically(arr3));
// const array = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];
// array.sort((a, b) => a.age - b.age);
// array.forEach((ele) => console.log(ele.name));

// -------------------array map method-------------------------
// let newArr = arr2.map(ele => ele.age * 2);
// console.log(arr2);
// console.log(newArr);

// let arr = [10, 30, 50];

// let area = arr.map((radius) => Math.PI * radius * radius);
// console.log(area);

// ----------------------array find vs filter method----------------------------
// let result = arr2.filter(ele => ele.age === 25);
// console.log(result);
// console.log(arr2);

// -------------------array splice --------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(5, 1, 67);
// console.log(arr);

// let arr = [6, 8, 10];
// let result = arr.reduce((acc, ele) => acc + ele);
// console.log(result);

// -------------------------Practice----------------------------------
// let numPlate = 1024;
// //--------------------------------Checking four digit or not-------------------------

// function isFourDigit(numPlate) {
//   return numPlate > 999 && numPlate <= 9999;
// }
// let fourDigitOrNot = isFourDigit(numPlate);
// console.log(fourDigitOrNot);

// miraculous.push(fourDigitOrNot);

// //------------------------Do sum----------------------------------------

// function sumOfDigits(numPlate) {
//   let sum = 0;
//   while (numPlate > 0) {
//     let digit = numPlate % 10;
//     sum += digit;
//     numPlate = Math.floor(numPlate / 10);
//   }
//   return sum;
// }

// let totalSum = sumOfDigits(numPlate);
// console.log(totalSum);

// //------------------------------prime or not---------------------------------------

// function isPrime(totalSum) {
//   let flag = true;
//   for(let i = 2; i < totalSum; i++) {
//     if(totalSum % i === 0)
//       flag = false;
//   }
//   return flag;
// }

// let primeOrNot = isPrime(totalSum);
// console.log(primeOrNot);

// miraculous.push(primeOrNot);

// //-------------------perfect square or not-----------------------------------
// function isPerfectSq(number) {
//   let sq = Math.sqrt(number);
//   return Number.isInteger(sq);
// }
// let perfectSq = isPerfectSq(numPlate);
// console.log(perfectSq);
// miraculous.push(perfectSq);
// console.log(miraculous);

// if(miraculous.includes(false))
// console.log("Non Miraculous");
// else
// console.log("Miraculous");

// let numPlate = 1024;
// //---------checking and returning true and false if numPlate is 4 digit or not--------------
// let isFourDigit = (numPlate) => numPlate > 999 && numPlate <= 9999;



// //-------Checking and returning total sum of digits and storing it in sum-----------------

// let sumOfDigits = (numPlate) => {
//   let sum = 0;
//   while (numPlate > 0) {
//     sum += numPlate % 10;
//     numPlate = Math.floor(numPlate / 10);
//   }
//   return sum;
// };

// let sum = sumOfDigits(numPlate);


// //---------------Checking if sum is prime or not by returning true and false---------

// let isPrime = (sum) => {
//   if(sum < 2) {
//     return false;
//   }
//   for (let i = 2; i < sum; i++) {
//     if (sum % i === 0) return false;
//   }
//   return true;
// };


// //----------Checking if numPlate is perfect square or not by returning true and false------
// let isPerfectSq = (numPlate) => Number.isInteger(Math.sqrt(numPlate));



// //-----------checking miraculous or not-----------------
// if (isFourDigit(numPlate) && isPrime(sum) && isPerfectSq(numPlate)) {
//   console.log("Miraculous");
// } else {
//   console.log("Non Miraculous");
// }



let arr = [1, 2, 3, 4, 5];

let result = arr.find((element, index) => element > 3);
console.log(result);