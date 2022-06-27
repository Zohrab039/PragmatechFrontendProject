let a_x=120,a_y=200
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
Foo()