let calculeazaSuma = (a, b) => {
    let suma = a + b;
    if(suma > 10){
        suma *= 2;
    } else if(suma <= 10 && suma > 5) {
        suma += 1;
    } else {
        suma = 0;
    }
    return suma;
}

let suma = calculeazaSuma(3, 4);
console.log(suma);


suma = calculeazaSuma(3, 8);
console.log(suma);

suma = calculeazaSuma(3, 8);
console.log(suma);

suma = calculeazaSuma(0, 8);
console.log(suma);
//some code
suma = calculeazaSuma(3, 2);
console.log(suma);


