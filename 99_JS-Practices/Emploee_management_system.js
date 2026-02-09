const calculateSalary = (baseSalary, bonus = 0) => baseSalary + bonus;
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`; // Added space
const filterActiveEmployees = employees => employees.filter(emp => emp.isActive);

// Parent class
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`; // Added space
    }
    
    getDetails() {
        return `${this.getFullName()} is ${this.age} years old`;
    }
}

// Child class
class Employee extends Person {
    constructor(firstName, lastName, age, position, salary) {
        super(firstName, lastName, age); // ✅ Call parent constructor FIRST
        this.position = position;
        this.salary = salary;
        this.isActive = true; // ✅ Add isActive property
    }
    
    // Changed from arrow function to regular method for better memory usage
    getFormattedSalary() {
        return `$${this.salary.toLocaleString()}`;
    }
    
    static compareSalary(emp1, emp2) {
        return emp1.salary - emp2.salary;
    }
    
    promote(newPosition, salaryIncrease) {
        this.position = newPosition;
        this.salary += salaryIncrease;
        return `${this.getFullName()} promoted to ${newPosition}`;
    }
}

// Usage
const employees = [
    new Employee("Abdul", "Basit", 21, "Developer", 70000),
    new Employee("Awais", " ", 22, "Web Designer", 1000000)
];

// Filter active employees
const activeEmployees = filterActiveEmployees(employees); // Fixed variable name
console.log("Active Employees:", activeEmployees.map(emp => emp.getFullName()));

// Compare Salaries
const salaryDifference = Employee.compareSalary(employees[0], employees[1]);
console.log(`Salary difference: $${salaryDifference}`);

// Additional test
console.log(employees[0].getFormattedSalary()); // Should print: $70,000
console.log(employees[1].promote("Senior Web Designer", 20000)); // Test promote