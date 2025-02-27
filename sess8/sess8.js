// let a = "Onkar";
// console.log(a);

// var firstName = "Kevin";

// function display(){
//      var lastName = "Obrain";
//      console.log("FullName: " + firstName + " " + lastName );
// }

// display();

// console.log("FullName: " + firstName + " " + lastName );

//----------------Great grand parent example-------------------------
// function greatgrandparent(a){
//   function grandparent(b){
//     function parent(c){
//       function child(){
//         console.log(a,b,c);

//       }
//       child();
//     }
//     parent(6);
//   }
//   grandparent(7);
// }

// greatgrandparent(5);

//------------- How var fails with block-----------------
// var a = "Onkar";
// if (1) {
//   if (a == "Onkar") {
//     var a = "Crio";
//     console.log(a);
//   }
// }

// console.log(a);

//---------------------How var works -------------------
// var a =10;  // global variable

// func ();

// function func() {
//   if(a==10)
//     {
//         let x =10;
//        console.log(x);
//     }
//   console.log(x);

//   fun1();
//   function fun1() {
//     var y = 10;
//     if(a==10)
//       {
//          console.log(x);
//       }
//     console.log(x);
//   }
//   console.log(y);
// }
// console.log(x);

//-------------------------variable hoisting---------------------
// console.log(z); // undefined
// var z = 30;   // gets hoisted to it's global scope
// examp();
// function examp() {
//   console.log(y);
//   var y = 10;  // gets hoisted to it's function scope
// }
// console.log(y);  // Reference error because y has it's function score and it's hoisted to function score
//--------------------------Function hoisting -----------------------------------------
// if (true) {
//   function sayHello() {
//     function sayWorld() {
//       console.log("World!");
//     }
//     sayWorld();
//     console.log("Hello!");
//   }
//   sayHello(); // "Hello!" - Works fine inside the block
//   sayWorld();
// }
// sayHello(); // ReferenceError: sayHello is not defined - Not accessible outside the block
// sayWorld();

//------------------------------Hoisting function expression---------------------------
// func1();
// var func1 = function() {
//   console.log("Hello World");
// }



//-------------------callback function----------------------------
// function bikeRepair() {
//   console.log("Working on bike");
//   console.log("Changing gears");
//   console.log("Fixing brakes");
//   console.log("Washing bike");
//   callOwner("Onkar");
// }
// function callOwner(a) {
//   console.log(`calling owner ${a}, take your bike back`);
// }

// bikeRepair(callOwner);

// function bikeRepair(OwnerCall) {
//   console.log("Working on bike");
//   console.log("Changing gears");
//   console.log("Fixing brakes");
//   console.log("Washing bike");
//   OwnerCall("Onkar");
// }
// let call = a => console.log(`calling owner ${a}, take your bike back`);

// bikeRepair(call);
// call("Crio");



// var g = 10;
// function func() {
//     if(g==10) {
//         var t = 20;
//         let p = 30;
//     }
//     console.log(t);
//     console.log(p);
// }
// func();

// function greet(){
//   return function() {
//       console.log('Inner function');
//   }
// }
// const returnVal = greet();
// returnVal();







// const a = 10;
// func();
// function func() {
//     const a = 20;
//     console.log(a);
//     if(true) {
//         const a = 25;
//         console.log(a);
//     }
// }
// console.log(a);
// "use strict"
// a = 7;
// console.log(a);
// var a;

// console.log(Math.floor(Math.sqrt(13)));
// console.log(3 * 3 === 13);


function isFourDigit(number){
  if(number>999 && number<10000){
    return true;
  }
  else{
    return false;
  }
}
//console.log(isFourDigit(1234));

//let isFourDigit2 =number=>number>999&&number<10000;
//console.log(isFourDigit2(1234));

function sumOfDigits(number){
  let sum=0;
  while(number>0){
    sum+=number%10;
    number=Math.floor(number/10);
  }
  return sum;
}
//console.log(sumOfDigits(1234));


function isPrime(sum)
{
  let i=2;
  while(i<sum){
    let rem=sum%i;
    if(rem!==0){
      i++;
    }
    else{
      return false;
    }
  }
 // console.log("inside prime");
  return true;
}
//console.log(isPrime(11));

function isPerfectsq(number){
  let result=Math.sqrt(number);
 // console.log("inside sqrt"+result);
  if( Number.isInteger(result)){
    return true;
  }
  else
    return false;
}

function isMarvalous(number,operation){
  console.log(checking on ${number});
  operation(number);

}
let sumofdigits=sumOfDigits(1024);
console.log(sumofdigits);
if(isPrime(sumofdigits)&&isPerfectsq(1024)&&isFourDigit(1024)){
 console.log("miraculous"); 
}
else{
  console.log("not miraculous");
}

