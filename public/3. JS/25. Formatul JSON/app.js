console.log("OBJECT to JSON");
const person = {
    name: "Ion Creanga",
    age: 123
};

console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);


console.log("JSON to OBJECT");


const studentJSON = `{
    "name": "Ion Creanga",
    "age": 123.45,
    "boolean": false,
    "marks": [
      9,
      10,
      8,
      5
    ],
    "myField": 123,
    "null_value": null,
    "birthday": {
      "day": 1,
      "month": 12,
      "year": 2000
    }
  }`;

  console.log(studentJSON);

  const student =JSON.parse(studentJSON);
  console.log(student);
