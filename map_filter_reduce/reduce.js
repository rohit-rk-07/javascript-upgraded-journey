const arr = [3,4,2,6,5];

function sumOfAll(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

// console.log(sumOfAll(arr));

const output = arr.reduce( (a ,c) => {a = a + c; return a }, 0);

// console.log(output);

function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}

const findMaxNum = arr.reduce( (acc, curr) => { if(curr > acc) acc = curr; return acc }, 0);

// console.log(findMaxNum);


const users = [
    {firstName: "Peter", lastName:"Griffin", age:26},
    {firstName: "Lois", lastName:"Griffin", age:26},
    {firstName: "Chris", lastName:"Griffin", age:12},
    {firstName: "Meg", lastName:"Griffin", age:9},
    {firstName: "Stevwe", lastName:"Griffin", age:2},
    {firstName: "Braien", lastName:"Griffin", age:1}
]

const age = users.reduce( (acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(age);