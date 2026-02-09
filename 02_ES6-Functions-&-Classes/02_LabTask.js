// ============ EMPLOYEE CLASS (Base Class) ============
class Employee {
    constructor(name = '', dept = 'general') {
        this.name = name;
        this.dept = dept;
    }

    getInfo() {
        return `Name: ${this.name}, Department: ${this.dept}`;
    }
}

// ============ MANAGER CLASS (Extends Employee) ============
class Manager extends Employee {
    constructor(name = '', dept = 'general', reports = []) {
        super(name, dept);
        this.reports = reports;  // Array of Employee objects
    }

    addReport(employee) {
        if (employee instanceof Employee) {
            this.reports.push(employee);
            return true;
        }
        return false;
    }

    getInfo() {
        return super.getInfo() + `, Reports: ${this.reports.length}`;
    }

    listReports() {
        return this.reports.map(report => report.name);
    }
}

// ============ WORKERBEE CLASS (Extends Employee) ============
class WorkerBee extends Employee {
    constructor(name = '', dept = 'general', projects = []) {
        super(name, dept);
        this.projects = projects;  // Array of strings
    }

    addProject(project) {
        this.projects.push(project);
    }

    getInfo() {
        return super.getInfo() + `, Projects: ${this.projects.length}`;
    }
}

// ============ SALESPERSON CLASS (Extends WorkerBee) ============
class SalesPerson extends WorkerBee {
    constructor(name = '', projects = [], quota = 100) {
        super(name, 'sales', projects);  // Override dept to "sales"
        this.quota = quota;
    }

    getInfo() {
        return super.getInfo() + `, Quota: $${this.quota}`;
    }

    updateQuota(newQuota) {
        this.quota = newQuota;
    }
}

// ============ ENGINEER CLASS (Extends WorkerBee) ============
class Engineer extends WorkerBee {
    constructor(name = '', projects = [], machine = '') {
        super(name, 'engineering', projects);  // Override dept to "engineering"
        this.machine = machine;
    }

    getInfo() {
        return super.getInfo() + `, Machine: ${this.machine || 'None assigned'}`;
    }

    assignMachine(machine) {
        this.machine = machine;
    }
}

// ============ DEMONSTRATION ============
console.log("=== EMPLOYEE HIERARCHY DEMONSTRATION ===\n");

// Create Employees
const genericEmployee = new Employee();
console.log("1. Generic Employee:");
console.log(genericEmployee.getInfo());

// Create Manager
const manager = new Manager("Alice Johnson", "Management");
console.log("\n2. Manager:");
console.log(manager.getInfo());

// Create WorkerBee
const worker = new WorkerBee("Bob Smith", "IT", ["Website Redesign", "Database Migration"]);
console.log("\n3. WorkerBee:");
console.log(worker.getInfo());
console.log("Projects:", worker.projects);

// Create SalesPerson
const salesPerson = new SalesPerson("Carol Davis", ["North Region", "Q4 Campaign"], 150000);
console.log("\n4. SalesPerson:");
console.log(salesPerson.getInfo());
console.log("Department (overridden):", salesPerson.dept);

// Create Engineer
const engineer = new Engineer("David Wilson", ["AI Model", "API Integration"], "Server Cluster-5");
console.log("\n5. Engineer:");
console.log(engineer.getInfo());
console.log("Department (overridden):", engineer.dept);

// Demonstrate Inheritance Chain
console.log("\n=== INHERITANCE DEMONSTRATION ===");

// Create a SalesPerson and check inheritance
const sp = new SalesPerson("Eva Martinez");
console.log("\nSalesPerson instance checks:");
console.log("sp instanceof SalesPerson:", sp instanceof SalesPerson);
console.log("sp instanceof WorkerBee:", sp instanceof WorkerBee);
console.log("sp instanceof Employee:", sp instanceof Employee);

// Demonstrate Manager with reports
console.log("\n=== MANAGER WITH REPORTS DEMONSTRATION ===");

const manager2 = new Manager("Frank Brown", "Operations");
const employee1 = new Employee("Grace Lee", "Operations");
const employee2 = new WorkerBee("Henry Chen", "Operations", ["Logistics"]);
const employee3 = new SalesPerson("Irene Kim", ["Retail"], 80000);

// Add reports to manager
manager2.addReport(employee1);
manager2.addReport(employee2);
manager2.addReport(employee3);

console.log(`\nManager: ${manager2.name}`);
console.log(`Total Reports: ${manager2.reports.length}`);
console.log("Report Names:", manager2.listReports());

// Demonstrate property overriding
console.log("\n=== PROPERTY OVERRIDING DEMONSTRATION ===");

const engineer2 = new Engineer("Jack Taylor");
console.log("Engineer's department (should be 'engineering'):", engineer2.dept);

const salesPerson2 = new SalesPerson("Karen White");
console.log("SalesPerson's department (should be 'sales'):", salesPerson2.dept);

const worker2 = new WorkerBee("Larry King");
console.log("WorkerBee's department (defaults to 'general'):", worker2.dept);

// Demonstrate method polymorphism
console.log("\n=== METHOD POLYMORPHISM ===");
const employees = [
    new Employee("Generic Employee"),
    new Manager("Manager Mike", "Finance"),
    new WorkerBee("Worker Will", "IT", ["Project A"]),
    new SalesPerson("Sales Sally", ["Region 1"], 120000),
    new Engineer("Engineer Ellen", ["System Design"], "Workstation-42")
];

console.log("\nAll Employees Info:");
employees.forEach((emp, index) => {
    console.log(`${index + 1}. ${emp.constructor.name}: ${emp.getInfo()}`);
});

// Demonstrate property defaults
console.log("\n=== PROPERTY DEFAULTS DEMONSTRATION ===");

const defaultSalesPerson = new SalesPerson();
console.log("Default SalesPerson:");
console.log("- Name:", defaultSalesPerson.name);
console.log("- Dept:", defaultSalesPerson.dept);
console.log("- Quota:", defaultSalesPerson.quota);
console.log("- Projects:", defaultSalesPerson.projects);

const defaultEngineer = new Engineer();
console.log("\nDefault Engineer:");
console.log("- Name:", defaultEngineer.name);
console.log("- Dept:", defaultEngineer.dept);
console.log("- Machine:", defaultEngineer.machine);
console.log("- Projects:", defaultEngineer.projects);

// Class hierarchy demonstration
console.log("\n=== CLASS HIERARCHY ===");
console.log("Employee");
console.log("├── Manager");
console.log("│   └── (Manager has reports property)");
console.log("└── WorkerBee");
console.log("    ├── SalesPerson (dept: 'sales', adds quota)");
console.log("    └── Engineer (dept: 'engineering', adds machine)");