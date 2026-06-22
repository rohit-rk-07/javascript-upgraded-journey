const arr = [5,4,3,7,6];

function double(x){
    return x*2;
}

const output = arr.map( (arr) => arr * 2 );

// console.log(output);

const users = [
    {firstName: "Peter", lastName:"Griffin", age:26},
    {firstName: "Lois", lastName:"Griffin", age:26},
    {firstName: "Chris", lastName:"Griffin", age:12},
    {firstName: "Meg", lastName:"Griffin", age:9},
    {firstName: "Stevwe", lastName:"Griffin", age:2},
    {firstName: "Braien", lastName:"Griffin", age:1}
]

const result = users.map( (user) => user.firstName+" "+user.lastName);

// console.log(result);



