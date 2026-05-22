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

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const teacher4: Teacher = {
  firstName: 'Marie',
  lastName: 'Curie',
  fullTimeEmployee: true,
  location: 'Paris',
  subject: 'Physics' // Propriété dynamique
};

console.log(teacher4);
