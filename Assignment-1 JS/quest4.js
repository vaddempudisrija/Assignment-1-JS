let inp1=prompt("Enter first number")
let inp2=prompt("Enter first number")
if(isNaN(inp1) || isNaN(inp2)){
    (function(a,b){
        console.log(a+b);
    })(inp1,inp2);
}
else{
    inp1=parseInt(inp1);
    inp2=parseInt(inp2);
    (function(a,b){
        console.log(a+b);
    })(inp1,inp2);
}