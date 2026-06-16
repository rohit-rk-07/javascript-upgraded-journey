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
Line 13 (z();): The engine triggers the execution by calling the outermost function z().
Line 2 (var b = 900;): Inside z, the variable b is assigned the value 900.
Line 11 (x();): Still inside z, the engine calls the middle function x().
Line 4 (var a = 7;): Inside x, the variable a is assigned the value 7.
Line 8 (y();): Still inside x, the engine calls the innermost function y().
Line 6 (console.log(a, b);): Inside y, the engine looks up the chain, finds a in x, finds b in z, and prints 7 900.
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