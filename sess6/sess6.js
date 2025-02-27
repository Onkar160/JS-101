
// let last = "phulwalkar"
// const userDetails = {
//   name: {
//     first: "Kapil",
//     last: "Raghuwanshi",
//   },
//   jobTitle: "JS Instructor @ Crio.do",
//   email: {
//     work: "kapil@epsilon.com",
//     personal: "",
//   },
//   status: {
//     isOnline: true,
//     isVerified: false,
//   }
// }

// userDetails.name = "Onkar";
// userDetails.last = "Phulwalakr";

// userDetails.status["isProMember"] = false;
// console.log(userDetails);
// function fun1() {
  
// }
// console.log(typeof(fun1));



// let arr = [
//   {
//     color: "Red",
//     type: "car",
//     capacity: "4 seater"
//   },
//   {
//     color: "Yellow",
//     type: "car",
//     capacity: "6 seater"
//   },
//   {
//     color: "Green",
//     type: "bike",
//     capacity: "2 seater"
//   }
// ]
// console.log(arr[0]);

// var student = [

//   {
//       name: "Kevin",
//       std_id: 10,
//       marks: 25
//   },
//   {
//      name: "Austin",
//      std_id: 20,
//      marks: 30
//   },
//   {
//       name: "Robin",
//       std_id: 30,
//       marks: 200
//   }

// ];

// if(student[0].marks > student[1].marks && student[0].marks > student[2].marks) {
//   console.log(student[0].name);
// } else if(student[1].marks > student[0].marks && student[1].marks > student[2].marks) {
//   console.log(student[1].name);
// } else {
//   console.log(student[2].name);
// }
// // console.log(303.3*3===909.9);
// let {name, std_id, marks, age} = student[0];
// console.log(name, std_id, marks, age);
// console.log(student.length);

// let arr = [1,2,3,4,5,6,7];
// let [a,b,c] = arr;
// console.log(a,b,c);
// console.log(-0/7);
// // console.log();
// console.log(0/0);
// console.log(5/0);
// console.log("JS"/5);
// console.log("JS"/0);
// console.log(5/"JS");
// console.log(0/"JS");

// console.log(typeof(-0/7));
// // console.log(typeof(undefined));
// console.log(typeof(0/0));
// console.log(typeof(5/0));
// console.log(typeof("JS"/5));
// console.log(typeof("JS"/0));
// console.log(typeof(5/"JS"));
// console.log(typeof(0/"JS"));
// let a = null;
// console.log(typeof a);
// console.log(typeof(null));
// let b;
// console.log(typeof b);
// console.log(typeof(undefined));
// console.log(null == undefined);
// console.log(null === undefined);

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b, c, d, e, f, g, h] = arr;
// console.log(a, b, c, d, e, f, g, h);
// console.log(arr);

let obj = {
  name: "Onkar",
  city: "Nanded",
  sprint: "JS101",
  channel: "Crio",
  address: {
    street: "1st street",
    landmark: "Near hospital",
  }
}

let {name, city, sprint, age, address} = obj;
console.log(obj);
console.log(name, city, sprint, age);
city = "Mumbai";
console.log(obj);
console.log(name, city, sprint, age);

