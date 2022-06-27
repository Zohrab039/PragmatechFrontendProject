let x = [1,2,4];

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

Foo()