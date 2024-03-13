function output() {
    console.log("foo");
}

function mystery(f){
    return function () {
        f();
        f();
    }
}

let f1 = mystery(output);
f1();
console.log();

let f2 = mystery(f1);
f2();
console.log();

let f3 = mystery(f2);
f3();
console.log();