const radius = [3,2,1,4];

function area(radius){
    return 2 * radius;
}

const calculate = function(arr, logic){
    const output = [];
    for(let i=0; i<arr.length; i++){
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius, area));