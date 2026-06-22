const arr = [4,3,2,6,7,5];

function oddOne(arr){
    return arr % 2;
}

const output = arr.filter((arr) => arr < 5);

// console.log(output);

const users = [
    {firstName: "Peter", lastName:"Griffin", age:26},
    {firstName: "Lois", lastName:"Griffin", age:26},
    {firstName: "Chris", lastName:"Griffin", age:12},
    {firstName: "Meg", lastName:"Griffin", age:9},
    {firstName: "Stevwe", lastName:"Griffin", age:2},
    {firstName: "Braien", lastName:"Griffin", age:1}
]

const names = users.filter((user) => user.age < 20).map( (user) => user.firstName);

console.log(names);
