// Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın

countries = {
    Afghanistan: [
        "Herat",
        "Kabul",
        "Kandahar",
        "Molah",
        "Rana",
        "Shar",
        "Sharif",
        "Wazir Akbar Khan"
    ],
    Albania: [
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        "Tirana",
        "Ura Vajgurore"
    ],
    Algeria: [
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Blida",
        "Bordj",
        "Bordj Bou Arreridj",
        "Bougara",
        "Cheraga",
        "Chlef",
        "Constantine",
        "Djelfa",
        "Draria",
        "El Tarf",
        "Hussein Dey",
        "Illizi",
        "Jijel",
        "Kouba",
        "Laghouat",
        "Oran",
        "Ouargla",
        "Oued Smar",
        "Relizane",
        "Rouiba",
        "Saida",
        "Souk Ahras",
        "Tamanghasset",
        "Tiaret",
        "Tissemsilt",
        "Tizi",
        "Tizi Ouzou",
        "Tlemcen"
    ]
}

function ShowCountryName(){
    let names=Object.keys(countries);
    console.log(names)
}

ShowCountryName()