// let obj = {
//   name: "Onkar",
//   age: "25",
//   isMember: true
// }
// console.log(obj);

// console.log(Math.round(25.5));
// console.log(Math.max(10,11,12,2,4,8,3,7));

// {
//   var a = "Hello";
//   let a = "World";
// }
// console.log(a);
// console.log(b);

// let arr = {
//   name: "R1",
//   id: "5"
// }
// let result = arr.map(a => a.id*2);
// console.log(result);

let arr = [1, 1, 1, 1, 1, 1, 1];
// arr.sort((a, b) => {
//   if(b === a) {
//     let ind = arr.indexOf(b);
//     arr.splice(ind, 1);
//     }
//   }
// );
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] === arr[i+1]) {
//     arr.splice(i, 1);
   
//   }
// }
arr.forEach((a, b) => {
    if( arr[b] === arr[b+1]) {
        arr.splice(b, 1);
        b--;
    }
});
console.log(arr);