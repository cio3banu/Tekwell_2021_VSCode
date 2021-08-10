const numere = [1, 3, 5, 7, 9];
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
numere[2] = 99;
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
console.log("Adaugarea unui element la sfirsitul masivului");
numere.push(555);
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
console.log("Stergerea elementului de la sfirsitul masivului");
numere.pop(555);
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
console.log("Adaugarea elementului la inceputul masivului");
numere.unshift(333);
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
console.log("Stegrerea elementului de la inceput");
numere.shift();
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);

console.log("Stergerea elementelor incepind cu pozitia X, urmatoarele Y elemente");
numere.splice(2, 1);
console.log("Masivul", numere);
console.log("Lungime masiv: ", numere.length);
console.log("Extragerea din masiv a elementelor incepind cu pozitia X pina la pozitia Y(fara elementul de pe pozitia Y)");
const slicedArray = numere.slice(2, 4);
console.log("Masivul", slicedArray);
console.log("Lungime masiv: ", slicedArray.length);

console.log("Extragerea din masiv a elementelor incepind cu pozitia X pina la sfirsit de masiv");
const slicedArray2 = numere.slice(1);
console.log("Masivul", slicedArray2);
console.log("Lungime masiv: ", slicedArray2.length);



