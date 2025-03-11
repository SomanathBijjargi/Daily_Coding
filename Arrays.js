let arr = [1,2, 3.0,'four',true];

let arr2 = new Array(1,2,3,4,5); // While Creating an array with an object no need of []..

//Arrays can have more than one type...

console.log(arr);
console.log(arr2);

//Array Methods....

// 1. push()

arr2.push(6);
console.log(arr2); //[ 1, 2, 3, 4, 5, 6 ]

// 2. pop()
arr2.pop()
console.log(arr2); //[ 1, 2, 3, 4, 5 ]

//3. shift() and unshift()

arr2.shift();
console.log(arr2);// [ 2, 3, 4, 5 ]

arr2.unshift(100);
console.log(arr2);// [ 100, 2, 3, 4, 5 ]

// -------------Some Other OPeration--------------

let array = [0,1,2,3,4,5];

console.log(array.includes(5)) // true
console.log(array.indexOf(5)) // 5

// --------------slice and splice ----------------
console.log("____________");
let MyArray = [0,1,2,3,4,5];
console.log(MyArray);                // [ 0, 1, 2, 3, 4, 5 ]

let mynArray = MyArray.slice(1,3);
console.log(mynArray);               // [ 1, 2 ]
console.log(MyArray);                // [ 0, 1, 2, 3, 4, 5 ]

let mynArray2 = MyArray.splice(1,3);
console.log(mynArray2);             // [ 1, 2, 3 ]
console.log(MyArray);               // [ 0, 4, 5 ]  => THIS IS THE CHANGE (Here The original array is modified)..