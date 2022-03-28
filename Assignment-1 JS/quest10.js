function sumOfOddEven(arr){
    let oddSum=0
    let evenSum=0
    for(let i of arr){
        if(i%2==0){
            evenSum+=i
        }
        else{
            oddSum+=i
        }
    }
    return evenSum+" "+oddSum;
}
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const res=sumOfOddEven(arr);
console.log("sum of Even numbers "+res.split(" ")[0]+" and sum of Odd numbers "+res.split(" ")[1]);