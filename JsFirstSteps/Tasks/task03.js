let x = 256;
let x1= Math.floor(x/100);
let x2= Math.floor(x-x/10-x1);
let x3= Math.floor(x)
console.log(x1,x2,x3)

function Foo(){
    let split1 = Math.floor (x/100)
    let split2 = Math.floor(x/10 - 10)
    let split3 = Math.floor(x/1 - 120)
    console.log(split1,split2,split3)
}

Foo()