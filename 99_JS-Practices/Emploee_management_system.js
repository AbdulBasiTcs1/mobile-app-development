const calculateSalary = (baseSalary,bonus=0) =>baseSalary+bonus;
const getFullName = (firstName,lastName) => `${firstName}${lastName}`;
const filteActiveEmployees = employees => employees.filter(emp=>emp.isActive);

// Parent class
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullName(){
        return `${this.firstName}${this.lastName}`;
    }
    getDetails(){
        return `${this.getFullName()} is ${this.age} years old`
    }
}

// child class
class Employee extends Person{
    constructor(firstName,lastName,age,position,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.position=position;
        this.salary=salary;
    }
    getFormattedSalary=()=>{
        return `$${this.salary.toLocaleString()}`
    }
    static compareSalary(emp1,emp2){
        return emp1.salary-emp2.salary
    }
    promote(newPosition,salaryIncrease){
        this.position=newPosition;
        this.salary+=salaryIncrease;
        return `${this.getFullName()} promoted to ${newPosition}`
    }
}