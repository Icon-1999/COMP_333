function returnParam(param) {
    return param;
}
function wrapAdd (f, num){
    return function (param){
        return f(num + param);
    }
}

let f = wrapAdd(returnParam, 5);
let x = f(2);
let y = f(3);

console.log(x);
console.log(y);
