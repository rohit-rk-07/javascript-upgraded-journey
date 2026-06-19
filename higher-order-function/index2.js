const radius = [3,2,1,4];

function circumference(arr){
    const resultArr = [];
    for(let i=0; i<arr.length; i++){
        resultArr.push(2 * Math.PI * arr[i]);
    }
    return resultArr;
}
console.log(circumference(radius));

function area(arr){
    const resultArr = [];
    for(let i=0; i<arr.length; i++){
        resultArr.push(Math.PI * arr[i] * arr[i]);
    }
    return resultArr;
}
console.log(area(radius));

function diameter(arr){
    const resultArr = [];
    for(let i=0; i<arr.length; i++){
        resultArr.push(2 * arr[i]);
    }
    return resultArr;
}
console.log(diameter(radius));