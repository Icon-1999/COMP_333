function indirectWhile (f1, f2) {
    if (f1(i) === true) {
        f2();
        indirectWhile(f1, f2);
    }
}

function f1 (i){
    return i < 5;
}

function f2 (){
    console.log("hello")
}

indirectWhile(f1, f2)