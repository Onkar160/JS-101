// let arr = [];
// arr[0] = 1;
// arr[1] = "Hello";
// arr[2] = true;
// arr[3] = "Piotr";
// arr[6] = "Hi";
// console.log(arr[2]);
// arr[3] = "Onkar";
// console.log(arr);




// activity
// let todoDB = [];
// function addTodo(item, priority) {
//   if (priority === "high") {
//     todoDB.unshift(item);
//   } else {
//     todoDB.push(item);
//   }
// }


// addTodo("Onkar", "high");
// addTodo("Piotr", "low");
// addTodo("Rahul", "high");
// console.log(todoDB);


// let i = 0;
// for(let j = i + 1;j <= 10;j++)
// {
//     console.log(j);
// }

// let array = [1, "Hello", true, "Piotr"];
// console.log(array[1]);
// array[3] = "Onkar";
// console.log(array[3]);

//---------------------todoDB activity from session 4--------------------------------

let todoDB = [];

function addToDo(item, priority) {
    if(priority === "high") {
        todoDB.unshift(item);
    } else {
        todoDB.push(item);
    }
}

addToDo("Onkar", "high");
addToDo("Crio", "low");
addToDo("navya", "low");
addToDo("Ancy", "high");

console.log(todoDB);