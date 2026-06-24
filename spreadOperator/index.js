//Copying Arrays and Objects
const orgArr = [1,2,3,4,5];
const arrCopy = [...orgArr];
console.log(arrCopy);

const orgObj = {name: "Bob", age:23};
const objCopy = {...orgObj};
console.log(objCopy);


//Merging arrays and objects
const part1 = ['a', 'b'];
const part2 = ['c', 'd'];
const combinedArr = [...part1, ...part2];
console.log(combinedArr);

const user = {name: "Sam"};
const job = {title: "Developer", name:"Samantha"};
const mergedObj = {...user, ...job};
console.log(mergedObj);

//passing arguments to functions
const nums = [5,2,3];
const maxNum = Math.max(...nums);
console.log(maxNum);

//converting strings to arrays
const word = "JS";
const chars = [...word];
console.log(chars);

