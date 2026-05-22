interface Teacher {
  // Propriété readonly
  readonly firstName: string;
  readonly lastName: string;
  
  // Propriétés obligatoires
  fullTimeEmployee: boolean;
  location: string;
  
  // Propriété optionnelle
  yearsOfExperience?: number;
  
  // propriétés dynamiques
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 1. Interface pour la fonction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 2. La fonction elle-même
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// 3. Tests
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Marie", "Curie"));
