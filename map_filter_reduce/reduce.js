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

console.log(output);
