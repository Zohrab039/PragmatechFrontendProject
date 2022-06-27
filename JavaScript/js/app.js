/* let a = 6;
let b = null;
console.log("5" + 6);
console.log(NaN+NaN);
console.log(NaN+null);
console.log(null+null);
console.log(NaN+true);
console.log(true+false);
console.log(90% + 5); */

/* let x=11;
let y=15;
let z=x+y;
let user_name='Zohrab'
console.log(`Hörmətli ${user_name}, sizin nəticəniz belədir. ${x} + ${y} = ${z}`); */


/* console.log('2' === 2) */

/* let result=100;

if(result<=50){
    if(result<0){
        console.log(`What? ${result}? This is impossible!`)
    }
    else{
        console.log(`What is this ${result}? You failed!`)
    }
    
}
else{
    console.log(`Your score is ${result}. Good job!`)
}
if(result>100){
    console.log(`${result}? BRUH! How did you do that?`)
}
if(result=100){
    console.log(`${result} Perfect!`)
} */

/* let x = 2;
let y = 1;
let operator = '+';
if(x!=Number){
    console.log('Yanlış!')
    
}else{
    console.log('Doğru!')
}
if (operator == '+') {
    console.log(`${x}+${y}=${x+y}`);
} else if (operator == '-') {
    console.log(`${x}-${y}=${x-y}`);
} else if (operator == '*') {
    console.log(`${x}*${y}=${x*y}`);
} else if (operator == '/') {
    console.log(`${x}/${y}=${x/y}`);
} else {
    console.log(`${operator} Bu operator düzgün deyil.`)
} */

/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
console.log(13)
console.log(14)
console.log(15)
console.log(16)
console.log(17)
console.log(18)
console.log(19)
console.log(20) */

/* for(let i = 0; i < 21; i++){
    console.log(i)
}; */

/* let a = 10
let b = 30
let c = 10

function Disc(){
    let dic= (b**2-4*(a*c))
    console.log(dic)
}

Disc()

function Foo(){
    let x1=Math.floor(-b-Math.sqrt(b**2-4*(a*c))/2*a)
    let x2=Math.floor(-b+Math.sqrt(b**2-4*(a*c))/2*a)
    console.log(Array(x1,x2))
    console.log(`x1-in cavabı ${x1} x2-nin cavabı isə ${x2}dir.`)
    if(Disc<0){
        alert('Funksiya səhvdir')
    }else{
        alert(`x1-in cavabı ${x1} x2-nin cavabı isə ${x2} dir.`)
    }
}

Foo() */

/* let user_name = prompt("Enter a name: ");

function greeter(user_name){
    alert("Hello " + user_name + " :)");
}

greeter(user_name) */

/* function Foo(){
    console.log('Hello World!')
} */

/* const Foo = () => console.log('Hello World!')
Foo() */

function sumNumbers(x, y){
    console.log(x+y)
    if(x !=Number  && y != Number){
        console.log('Not a Number')
    }
}
sumNumbers(5, 'Hi')

function Foo(){
    let a = 5;
    return a;
}
