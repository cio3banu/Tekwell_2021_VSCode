// Initializarea masivului
/*
const numere = [1, 2, 3];
console.log(numere);
*/
//Adresarea la un element out of range
/*
const numere = [1, 2, 3];
numere[10] = 5;
console.log(numere);
console.log(numere[5]);
*/

//Masive asociative
const numere = [1, 2, 3];
console.log("Lungimea masivului", numere.length);
numere[null] = 111;
console.log(numere);
numere['carevaIndex'] = 15;
console.log(numere);
numere["nume"] = "Ion Creanga";
console.log(numere);
console.log("Lungimea masivului", numere.length);

//Parcurgerea masivului cu FOR
console.log("Parcurgerea masivului cu For");
for (let index = 0; index < numere.length; index++) {
    console.log(numere[index]);
}

//Parcurgerea masivului cu WHILE
console.log("Parcurgerea masivului cu While");
let index = 0; 
while (index < numere.length) {
    console.log(numere[index]);
    index++;
}

//Parcurgerea masivului cu DO WHILE
console.log("Parcurgerea masivului cu DO While");
index = 0; 
do {
    console.log(numere[index]);
    index++;
}while (index < numere.length);

//Parcurgerea masivului cu For IN
console.log("Parcurgerea masivului cu For IN");
for (const key in numere) {
    //delete numere[key];
    if (Object.hasOwnProperty.call(numere, key)) {
        console.log(numere[key]);
        
    }else{
        console.log("EMPTY");
    }
}

//Parcurgerea masivului cu For OF
console.log("Parcurgerea masivului cu For OF");
for (const numar of numere) {
    console.log(numar);
}

//Parcurgerea masivului cu ForEach
console.log("Parcurgerea masivului cu ForEach");
numere.forEach((numar) => {
    console.log(numar);
});
