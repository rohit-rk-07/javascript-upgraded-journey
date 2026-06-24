//object destructing
const user = {name:'Alice', age:25};

//unpacking properties
const{name, age} = user;

console.log(name);
console.log(age);

//custom variables names
const{name: userName, age: userAge} = user;

//default values
const{role= 'Guest'} = user;

// array destructing 
const colors = ['red', 'green', 'blue'];
//unpacking positions
const[firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

//skipping elements
const[first, ,third] = colors;

//default values
const[a,b,c = 'yellow'] = ['red', 'green'];
