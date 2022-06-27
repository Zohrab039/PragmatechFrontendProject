let a = [5, 6, 7]
let b = [3, 6, 10]

function compareTriplets(a, b) {
    let alice=0;
    let bob=0;
    for(let i=0;i<length;i++){
        if(a[i]<b[i]){
            bob+=1
        }else if(a[i]>b[i]){
            alice+=1
        }
    }
    let arr = []
    arr.push(alice)
    arr.push(bob)
    return arr
}

compareTriplets()