// Task 1 start

/* let a = 353;
let b = 352;
let c = 12;

function Foo(){
    if(a-c<b-c){
        console.log('B ədədi C ədədinə daha yaxındır.')
    }else{
        console.log('A ədədi C ədədinə daha yaxındır.')
    }
}

Foo() */


// Task 1 done

// Task 2 start

/* function Foo(){
    
    if(typeof(x)){
        console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
    }else if(typeof (x)){
        console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
    }else if(typeof (x)){
        console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
    }else{
        console.log(`Dəyər daxil etmədiniz`)
    }
}

Foo() */

/* let x = [1,2,4];

function Foo(){
    if(typeof x === 'number'){
        console.log('Daxil etdiyiniz dəyər ədəddir.')
    }else if(typeof x === 'boolean'){
        console.log('Daxil etdiyiniz dəyər booleandir')
    }else if(typeof x==='string'){
        console.log('Daxil etdiyiniz dəyər stringdir.')
    }else if(typeof x==='bigint'){
        console.log('Daxil etdiyiniz dəyər bigintdir.')
    }else if(typeof x==='object'){
        console.log('Daxil etdiyiniz dəyər objectdir.')
    }else if(typeof x==='symbol'){
        console.log('Daxil etdiyiniz dəyər symboldur.')
    }else if(typeof x==='undefined'){
        console.log('Daxil etdiyiniz dəyər undefineddir.')
    }else if(typeof x==='function'){
        console.log('Daxil etdiyiniz dəyər functiondur.')
    }
}

Foo() */

/* if(typeof(x)){
    console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
}else if(typeof (x)){
    console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
}else if(typeof (x)){
    console.log(typeof(x)`${x} Dəyəri ${typeof(x)}`)
}else{
    console.log(`Dəyər daxil etmədiniz`)
} */

/* console.log(`${x} Dəyəri ${typeof(x)}dir`) */

// Task 2 done

// Task 3 start

/* let x = 256;
let x1= Math.floor(x/100);
let x2= Math.floor(x-x/10-x1);
let x3= Math.floor(x)
console.log(x1,x2,x3) */

/* function Foo(){
    let split1 = Math.floor (x/100)
    let split2 = Math.floor(x/10 - 10)
    let split3 = Math.floor(x/1 - 120)
    console.log(split1,split2,split3)
}

Foo() */


// Task 3 done but for only number 123

// Task 4 start

/* let a = 4;
let b = 6;
let c = 7;
let d = 3;

function Foo(){
    
}

Foo() */

// Task 4 done

// Task 5 start

/* let a = 4.5

function Foo(){
    let tam = Math.floor(a)
    let kesr = a - tam
    console.log(tam, kesr)
}

Foo() */

// Task 5 done

// Task 6 start

/* let a_x=120,a_y=200
let a= Math.floor(Math.sqrt(a_x**2+a_y**2))
let b_x=230,b_y=400
let b=Math.floor(Math.sqrt(b_x**2+b_y**2))
let c_x=210,c_y=345
let c=Math.floor(Math.sqrt(c_x**2+c_y**2))

function Foo(){
    if(a-b<a-c){
        console.log('B A-ya daha yaxındır')
    }else{
        console.log('C A-ya daha yaxındır')
    }
}
Foo() */


/* function Func(){
    let func1= (b_x-c_x)**2
    let func2= (b_y-c_y)**2
    let func= Math.sqrt(func1+func2)
    console.log(Math.floor(func))
}

Func() */

/* function FuncA(){
    let func= a_x**2+a_y**2
    let sqrt= Math.sqrt(func)
    console.log(Math.floor(sqrt))
}
FuncA()

function FuncB(){
    let func= b_x**2+b_y**2
    let sqrt=Math.sqrt(func)
    console.log(Math.floor(sqrt))
}
FuncB()

function FuncC(){
    let func=c_x**2+c_y**2
    let sqrt=Math.sqrt(func)
    console.log(Math.floor(sqrt))
}
FuncC() */




/* function Foo(){
    if(a-b_x+b_y<a-c_x+c_y){
        console.log('B A-ya daha yaxındır.')
    }else if(a-b_x+b_y>a-c_x+c_y){
        console.log('C A-ya daha yaxındır.')
    }
}

Foo() */


// Task 6 done

// Task 1 done, Task 2 done, Task 3 not done, Task 4 not done, Task 5 done, Task 6 done.

// 26.03.2022 task

/* (function(x){
    console.log('salam')
})() */

/* let x = (function(){
    console.log('salam')
})()

console.log(x) */

/* function Foo(x){
    x=('salam')
    console.log(x)
}
Foo() */


/* (function(){
    let x = 'salam';
    console.log(x)
    if(x==true){
        console.log(x)
    }else{
        console.log(x)
    }
})() */

/* (function(){
    let x = 'salam'
    console.log(x)
})() */

/* let i = 1;

while(i<100){
    console.log(i)
    i++;
} */

let arrAd=['Zohrab', 'Sohrab'];
let arrSoyad=['Semedzade', 'Semedli']
let arrYas=[19,20]
/* let insanlar=[arrAd,arrSoyad,arrYas] */

let obj= {
    ad: arrAd,
    soyad: arrSoyad,
    yas: arrYas
}

for(let key in obj){
    console.log(key, obj[key])
}


/* for(let key in arr){
    console.log(key, arr[key])
} */

let adlar = ['Ehmed', 'Memmed', 'Sahil']
let soyadlar= ['Ehmedov', 'Qasimov', 'Haciyev'];
let telebeler = [adlar, soyadlar]