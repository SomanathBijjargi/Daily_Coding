// --------------Spread OPerator--------------

let arr1 = [0,1,2,3];
let arr2 = [4,5,6,7];

let arr3 = [...arr1 , arr2[1]]; // this ... is knowen as spread operatot , once u apply ... the elements bounded in the arr 
                                // get spread and then u can add another element or an different entity..
console.log(arr3);               // [ 0, 1, 2, 3, 5 ]

let arr4 = [...arr1 , ...arr2];
console.log(arr4);                //[ 0, 1, 2, 3, 4, 5, 6, 7 ]

//-------------  ------------------------

console.log(Array.isArray("Somanath")); // false
console.log(Array.from("Somanath"));  // [ 's', 'o', 'm', 'a', 'n', 'a', 't', 'h' ]

let a = 10;
let b = 20;
let c = 30;

console.log(Array.of(a,b,c));  // [ 10, 20, 30 ]