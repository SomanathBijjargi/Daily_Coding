// -------------------- Filter --------------------

// ** Filter : if u define the scope then u have to use the return ....
const nums = [1,2,3,4,5,6,7,8,9,10];

const arr = nums.filter((i)=> i % 2 == 0);
const arr2 = nums.filter((i)=> {
    return i < 6;                // if ur using arrow fxns like () => {} then u have to use the return keyword for returning the answer
});

console.log(arr , arr2);  // [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]
//---------------------------------
const MyObjs = [
    {Name : 'Bunty' , Age : 19 , Sem : 4},
    {Name : 'Bubbly' , Age : 20 , Sem : 4},
    {Name : 'Bunny' , Age : 22 , Sem : 6},
    {Name : 'Chottu' , Age : 19 , Sem : 4},
    {Name : 'Danny' , Age : 21 , Sem : 6},
    {Name : 'Maddy' , Age : 22 , Sem : 6},
    {Name : 'Monto' , Age : 19 , Sem : 4},
    {Name : 'Nampi' , Age : 22 , Sem : 6}
]

const ans = MyObjs.filter((i)=>{
    return i.Sem === 4; 
})

console.log(ans); 

/* Output
[
  { Name: 'Bunty', Age: 19, Sem: 4 },
  { Name: 'Bubbly', Age: 20, Sem: 4 },
  { Name: 'Chottu', Age: 19, Sem: 4 },
  { Name: 'Monto', Age: 19, Sem: 4 }
]
*/

//-------------------------- map() ----------------------

const numbers = [0,1,2,3,4,5,6,7,8,9];

let answer = numbers.map((i)=>{
   return i+10;
})

console.log(answer);

/* output
[
  10, 11, 12, 13, 14,
  15, 16, 17, 18, 19
]
*/