let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;


console.log(single);
console.log(double);
console.log(backticks);

console.log("-------------------");
let text = `
        First line
        second line
`;

console.log(text);

const person = {
    name: "Ion Creanga",
    age: 123
};

let personInfo = "Scritorul ${person.name} are ${person.age} ani";
console.log(personInfo);
personInfo = "Scritorul " + person.name + " \nare " + person.age + " ani";//1
console.log(personInfo);
personInfo = `Scritorul ${person.name}, 
are ${person.age} ani`;//2
console.log(personInfo);
