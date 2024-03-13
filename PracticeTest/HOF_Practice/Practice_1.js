function add(a){
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            }
        }
    }
}

let f1 = add(5);
let f2 = f1(2);
let f3 = f2(7);

console.log(f3(4))