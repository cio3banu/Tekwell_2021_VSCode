let determinaSemn = (a = 0, b = 0) => {
    console.log(a, b);
    if(a > b){
        return ">";
    }
    if(a < b){
        return "<";
    }
    if(a === b){
        return "=";
    }
}

let suma = determinaSemn(3, 4);
console.log(suma);

suma = determinaSemn(4, 3);
console.log(suma);

suma = determinaSemn(4, 4);
console.log(suma);

suma = determinaSemn(3, 5);
console.log(suma);

suma = determinaSemn();
console.log(suma);

suma = determinaSemn(b = 9, a = 7);
console.log(suma);

