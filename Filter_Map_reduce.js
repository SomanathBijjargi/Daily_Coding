// -------------------- Filter --------------------

const nums = [1,2,3,4,5,6,7,8,9,10];

const arr = nums.filter((i)=> i % 2 == 0)
const arr2 = nums.filter((i)=> i < 6)

console.log(arr , arr2);