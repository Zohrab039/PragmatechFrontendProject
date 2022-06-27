// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages]

for(let i=0; i<5; i++){
    /* for(let j=0;j<3;j++){
        console.log(` ${students[j][0]},  ${students[j][1]}, ${students[j][2]}`)
    } */
    console.log(`Ad: ${students[0][i]}, Soyad: ${students[1][i]}, Yas: ${students[2][i]}`)
}

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34