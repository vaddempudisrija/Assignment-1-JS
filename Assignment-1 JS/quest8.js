/*
(a,b)=>a+b;
(a,b)=>a*b;
*/

(function(a, b){

    console.log(a + b);
})(10,10);

let add = (a, b) => {
    return a + b;
}
console.log(add(10,10));



let mul = (a, b) => {
    return a * b;
}
console.log(mul(10,10));


(function(a, b){
    console.log(a * b);
})(10, 10);