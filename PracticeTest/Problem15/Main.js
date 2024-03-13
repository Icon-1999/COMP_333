function foo(fooParam) {
    return function (innerParam) {
        return fooParam - innerParam;
    }
}

let f1 = foo(7);
let f2 = foo(10);
console.log(f1 (2));
console.log(f2 (3));
console.log(f1 (4));
console.log(f2 (5));
