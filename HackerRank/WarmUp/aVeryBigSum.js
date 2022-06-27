let arr=[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
let sum=0;

function aVeryBigSum(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
aVeryBigSum(arr)