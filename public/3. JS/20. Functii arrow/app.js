const calculeazaSuma = (a, b) => {
    return a + b
};

const calculeazaSumaArrow = (a, b) => a + b;

//y = f(x) = 2x^2+5x-9
const y = x => 2 * x ** 2 + 5 * x - 9;

let suma = calculeazaSuma(3, 4);
console.log(suma);
suma = calculeazaSumaArrow(3, 4);
console.log(suma);


