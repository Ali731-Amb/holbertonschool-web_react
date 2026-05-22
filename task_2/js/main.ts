// ========== TÂCHE 1 : Teacher ==========
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// ========== TÂCHE 2 : Directors ==========
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// ========== TÂCHE 3 : printTeacher ==========
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Marie", "Curie"));

// ========== TÂCHE 4 : StudentClass ========== 

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework(): string {
    return "Currently working";
  }
  
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass("John", "Doe");
console.log(student1.displayName());
console.log(student1.workOnHomework());

// ========== TÂCHE 5 : Advanced Types ==========

// 1. Interface DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. Interface TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string; 
}

// 3. Classe Director
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 4. Classe TeacherClass
class TeacherClass implements TeacherInterface {
   workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 5. Fonction createEmployee
function createEmployee(salary: number | string): Director | TeacherClass {
  if (typeof salary === "number" && salary < 500) {
    return new TeacherClass();
  }
  
  return new Director();
}

// 6. Tests
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// ========== TÂCHE 6 : Type Predicates ==========

// Fonction type predicate
function isDirector(employee: Director | TeacherClass): employee is Director {
  return employee instanceof Director;
}

// Fonction executeWork
function executeWork(employee: Director | TeacherClass): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Tests
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
