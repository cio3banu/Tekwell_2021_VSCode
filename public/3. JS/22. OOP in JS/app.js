class Employee{
    constructor(name, salaryPerHour){
        this.name = name;
        this.salaryPerHour = salaryPerHour;
        this.hours = 0;
    }

    setHours(hours){
        this.hours = hours;
    }

    getName(){
        return this.name;
    }
    
    calculateSalary = () => this.salaryPerHour * this.hours
}

const employeeIon = new Employee("Ion Creanga", 100);
employeeIon.setHours(120);
console.log(employeeIon.getName() + " va avea salariul:");
console.log(employeeIon.calculateSalary());
employeeIon.setHours(176);
console.log(employeeIon.getName() + " va avea salariul:");
console.log(employeeIon.calculateSalary());


const employeeMihai = new Employee("MihaiEminescu", 120);
employeeMihai.setHours(190);
console.log(employeeMihai.getName() + " va avea salariul:");
console.log(employeeMihai.calculateSalary());

