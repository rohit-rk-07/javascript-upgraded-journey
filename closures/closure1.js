function z(){
    var b = 900;
    function x(){
    var a = 7;
    function y(){
        console.log(a, b);
    }
    y();    
}
x();
}
z();

/*
Engine starts: JavaScript reads the code from top to bottom and sets up memory spaces for functions z, x, and y.
- (z();): The engine triggers the execution by calling the outermost function z().
- (var b = 900;): Inside z, the variable b is assigned the value 900.
- (x();): Still inside z, the engine calls the middle function x().
- (var a = 7;): Inside x, the variable a is assigned the value 7.
- (y();): Still inside x, the engine calls the innermost function y().
- (console.log(a, b);): Inside y, the engine looks up the chain, finds a in x, finds b in z, and prints 7 900.
*/

/*
Uses of closures
- Module Design Pattern
- Currying
- Functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more
*/