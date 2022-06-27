// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}

function ShowUsers(){
    for(let i=0;i<5;i++){
        console.log(`Ad: ${names[i]},Soyad: ${surnames[i]},Yas: ${ages[i]}`)
    }
}

ShowUsers()

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34