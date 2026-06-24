const testPromise = new Promise( (resolve, reject) => {
    const result = 5 + 5;
    if(result === 10) resolve('Fulfilled');
    else reject('Rejected');
} );

testPromise
.then(message => {console.log(message)})
.catch(message => console.log(message))
.finally( () => console.log("Done"));
