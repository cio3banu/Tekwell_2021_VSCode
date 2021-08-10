const numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Parcurgerea masivului cu moficicarea elementelor, clasic");
const numereDublate = [];
for (const numar of numere) {
    numereDublate.push(numar * 2);
}
console.log(numereDublate);

console.log("Parcurgerea masivului cu moficicarea elementelor, MAP");
console.log(numere.map(numar => numar * 2));


console.log("Afisarea elementelor impare din masiv. clasic");
const numereImpare = [];
for (const numar of numere) {
    if(numar % 2 !== 0){
        numereImpare.push(numar);
    }    
}
console.log(numereImpare);

console.log("Afisarea elementelor impare din masiv. FILTER");
console.log(numere.filter(numar => numar % 2 !== 0));


console.log("Cautarea elementului in masiv. clasic");
for (const numar of numere) {
    if(numar === 5){
        console.log(numar);
        break;
    }    
}

console.log("Cautarea elementului in masiv. clasic");
console.log(numere.find(numar => numar === 5));

console.log("Cautarea pozitiei elementului in masiv dupa valoare. clasic");
for (const key in numere) {
    if(numere[key] === 5){
        console.log(key);
        break;
    }    
}

console.log("Cautarea pozitiei elementului in masiv dupa valoare. findIndex");
console.log(numere.findIndex(numar => numar === 5));


console.log("Calcularea sumei elementelor din masiv. clasic");
let suma = 0;
for (const numar of numere) {
   suma += numar;
}
console.log("Suma elementelor este", suma);

console.log("Calcularea sumei elementelor din masiv. reduce");
console.log("Suma elementelor este", numere.reduce((accumulator, value) => accumulator + value, 0));


console.log("Completarea masivului cu numere aleatorii");

const numbers = [];
for (let index = 0; index < 200; index++) {
    numbers.push(Math.round(Math.random() * 100)   );
    
}

console.log(Math.random());
console.log(numbers);