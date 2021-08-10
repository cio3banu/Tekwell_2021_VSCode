const employee = {
    name: "Ion Creanga",
    salaryPerHour: 100,
    hours: 176,
    calculateSalary: function () { return this.salaryPerHour * this.hours}
}

console.log("Ion Creanga va avea salariul:");
console.log(employee.calculateSalary());