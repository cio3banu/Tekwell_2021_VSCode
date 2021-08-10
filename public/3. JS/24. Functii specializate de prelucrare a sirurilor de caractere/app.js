let sirDeCaractere = "12";
console.log(sirDeCaractere);
console.log(sirDeCaractere.length);


let text = "buna Ziua. eu Ma nUmeSc vAsilica";
text = text.toLowerCase();
console.log(text);
//todo de afisat propozitia care incepe cu litera mare(charAt, slice)
//todo vasilica de afisat cu litera mare (indexOf)

text = text.toUpperCase();
console.log(text);

const words = text.split(".");
console.log(words);

const sentence = words.join(",");
console.log(sentence);


const personName = ' Ion Creanga ';
console.log(personName.trim());


const digits = "0123456789";
console.log(digits.slice(4));
console.log(digits.slice(4, 8 + 1));
console.log('From 20 to 30', digits.slice(20, 30));

console.log(digits.slice(-5, 7));
console.log(digits.split(""));
console.log(digits.split("").reverse().join(''));


const replaceChar = (stringObject, position, newChar) => {
    let newObject = stringObject.split('');
    newObject.splice(position, 1, newChar);
    newObject = newObject.join('');
    return newObject;
}


let stringObject = '123';
stringObject[2] = '4'; // aceasta nu va lucra
console.log(stringObject);

console.log(replaceChar(stringObject, 2, '4'));


