const arr = [4,3,2,6,7,5];

function oddOne(arr){
    return arr % 2;
}

const output = arr.filter((arr) => arr < 5);

console.log(output);
