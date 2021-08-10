console.log("Pastrarea informatiei neomogene in ARRAY");
const personArray = [
    "Ion Creanga", 
    77, 
    1578.34, 
    "+37312345678"
];
console.log(personArray[0]);

console.log("Pastrarea informatiei neomogene in OBJECT");
const person = {
    name: "Ion Creanga",
    age: 77,
    salary: 1578.34,
    phone: "+37312345678"
};
console.log(person.name);


console.log("Lisat de obiecte");
const persons = [
    {
        name: "Ion Creanga",
        age: 77,
        salary: 1000,
        phone: "+37312345678"
    },
    {
        name: "Mihai Eminescu",
        age: 74,
        salary: 2000,
        phone: "+37387654321"
    },
    {
        name: "Vasile Alexandri",
        age: 60,
        salary: 3000,
        phone: "+37387654321"
    }
];

console.log(persons.map(person => {
    return {
        name: person.name,
        age: person.age
    }
}));


console.log(persons.filter(person => person.age <= 60));

//homework de calculat suma salariilor achitate tuturor persoanelor



