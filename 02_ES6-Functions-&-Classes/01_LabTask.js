// ============ PERSON CLASS (Base Class) ============

function Person() {
    // Common fields for Student and Employee
    this.id = 0;
    this.name = "Unknown";
    this.email = "unknown@example.com";
    this.age = 0;

    // Common methods
    this.getInfo = function () {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    };

    this.updateInfo = function (id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    };
}

// ============ STUDENT CLASS (Derived from Person) ============
function Student() {
    // Call parent constructor
    Person.call(this);

    // Additional Student-specific fields
    this.studentId = "S00000";
    this.courses = [];
    this.gpa = 0.0;

    // Override getInfo to include student-specific info
    var parentGetInfo = this.getInfo;
    this.getInfo = function () {
        return parentGetInfo.call(this) + `, Student ID: ${this.studentId}, GPA: ${this.gpa}`;
    };

    // Student-specific methods
    this.enrollCourse = function (course) {
        this.courses.push(course);
    };

    this.calculateGPA = function () {
        // Simple GPA calculation logic (for demonstration)
        if (this.courses.length === 0) {
            this.gpa = 0.0;
            return 0.0;
        }

        // In real scenario, you'd calculate based on grades
        this.gpa = 3.5; // Default for demo
        return this.gpa;
    };
}

// ============ EMPLOYEE CLASS (Derived from Person) ============
function Employee() {
    // Call parent constructor
    Person.call(this);

    // Additional Employee-specific fields
    this.employeeId = "E00000";
    this.department = "Not Assigned";
    this.salary = 0;

    // Override getInfo to include employee-specific info
    var parentGetInfo = this.getInfo;
    this.getInfo = function () {
        return parentGetInfo.call(this) + `, Employee ID: ${this.employeeId}, Department: ${this.department}, Salary: $${this.salary}`;
    };

    // Employee-specific methods
    this.calculateAnnualSalary = function () {
        return this.salary * 12;
    };
}

// ============ TEACHER CLASS (Derived from Employee) ============
function Teacher() {
    // Call parent constructor
    Employee.call(this);

    // Additional Teacher-specific fields
    this.subject = "Not Assigned";
    this.classes = [];

    // Override getInfo to include teacher-specific info
    var parentGetInfo = this.getInfo;
    this.getInfo = function () {
        return parentGetInfo.call(this) + `, Subject: ${this.subject}`;
    };

    // Teacher-specific methods
    this.assignSubject = function (subject) {
        this.subject = subject;
    };

    this.addClass = function (className) {
        this.classes.push(className);
    };
}

// ============ STAFF CLASS (Derived from Employee) ============
function Staff() {
    // Call parent constructor
    Employee.call(this);

    // Additional Staff-specific fields
    this.position = "Not Assigned";
    this.workHours = 40;

    // Override getInfo to include staff-specific info
    var parentGetInfo = this.getInfo;
    this.getInfo = function () {
        return parentGetInfo.call(this) + `, Position: ${this.position}, Work Hours: ${this.workHours}`;
    };

    // Staff-specific methods
    this.changePosition = function (newPosition) {
        this.position = newPosition;
    };

    this.calculateWeeklySalary = function (hourlyRate) {
        return this.workHours * hourlyRate;
    };
}

// ============ COURSES CLASS ============
function Course() {
    this.courseId = "C00000";
    this.courseName = "Unnamed Course";
    this.credits = 0;
    this.instructor = null;

    this.getCourseInfo = function () {
        return `Course ID: ${this.courseId}, Name: ${this.courseName}, Credits: ${this.credits}`;
    };

    this.assignInstructor = function (teacher) {
        if (teacher instanceof Teacher) {
            this.instructor = teacher;
            return true;
        }
        return false;
    };
}

// ============ STUDENT MANAGEMENT SYSTEM ============
function StudentManagementSystem() {
    this.students = [];
    this.employees = [];
    this.courses = [];

    // Add methods for managing the system
    this.addStudent = function (student) {
        if (student instanceof Student) {
            this.students.push(student);
            return true;
        }
        return false;
    };

    this.addEmployee = function (employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
            return true;
        }
        return false;
    };

    this.addCourse = function (course) {
        if (course instanceof Course) {
            this.courses.push(course);
            return true;
        }
        return false;
    };

    this.findStudentById = function (id) {
        return this.students.find(student => student.id === id);
    };

    this.findEmployeeById = function (id) {
        return this.employees.find(employee => employee.id === id);
    };

    this.getSystemSummary = function () {
        return {
            totalStudents: this.students.length,
            totalEmployees: this.employees.length,
            totalTeachers: this.employees.filter(e => e instanceof Teacher).length,
            totalStaff: this.employees.filter(e => e instanceof Staff).length,
            totalCourses: this.courses.length
        };
    };
}

// ============ DEMONSTRATION ============
console.log("=== DEMONSTRATING THE SYSTEM ===");

// Create a Student
var student1 = new Student();
student1.updateInfo(1, "John Doe", "john@student.edu", 20);
student1.studentId = "S12345";
console.log("Student Info:", student1.getInfo());

// Create a Teacher
var teacher1 = new Teacher();
teacher1.updateInfo(2, "Jane Smith", "jane@school.edu", 35);
teacher1.employeeId = "T98765";
teacher1.department = "Computer Science";
teacher1.salary = 5000;
teacher1.subject = "JavaScript Programming";
console.log("\nTeacher Info:", teacher1.getInfo());

// Create a Staff member
var staff1 = new Staff();
staff1.updateInfo(3, "Bob Wilson", "bob@school.edu", 42);
staff1.employeeId = "S45678";
staff1.department = "Administration";
staff1.salary = 4000;
staff1.position = "Office Manager";
console.log("\nStaff Info:", staff1.getInfo());

// Create Courses
var course1 = new Course();
course1.courseId = "CS101";
course1.courseName = "Introduction to Programming";
course1.credits = 3;
course1.assignInstructor(teacher1);

var course2 = new Course();
course2.courseId = "CS102";
course2.courseName = "Advanced JavaScript";
course2.credits = 4;

// Create Student Management System
var sms = new StudentManagementSystem();
sms.addStudent(student1);
sms.addEmployee(teacher1);
sms.addEmployee(staff1);
sms.addCourse(course1);
sms.addCourse(course2);

// Enroll student in courses
student1.enrollCourse(course1);
student1.enrollCourse(course2);
student1.calculateGPA();

console.log("\nEnrolled Courses for Student:");
student1.courses.forEach((course, index) => {
    console.log(`${index + 1}. ${course.getCourseInfo()}`);
});

// Display system summary
var summary = sms.getSystemSummary();
console.log("\n=== System Summary ===");
console.log(`Total Students: ${summary.totalStudents}`);
console.log(`Total Employees: ${summary.totalEmployees}`);
console.log(`  - Teachers: ${summary.totalTeachers}`);
console.log(`  - Staff: ${summary.totalStaff}`);
console.log(`Total Courses: ${summary.totalCourses}`);

// Testing inheritance
console.log("\n=== Testing Inheritance ===");
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
console.log("teacher1 instanceof Teacher:", teacher1 instanceof Teacher);
console.log("teacher1 instanceof Employee:", teacher1 instanceof Employee);
console.log("teacher1 instanceof Person:", teacher1 instanceof Person);
console.log("staff1 instanceof Staff:", staff1 instanceof Staff);
console.log("staff1 instanceof Employee:", staff1 instanceof Employee);