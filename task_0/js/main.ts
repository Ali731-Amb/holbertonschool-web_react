interface Student{
	firstName : string;
	lastName : string;
	age : number;
	location : string;

}

const student1: Student = {
	firstName : "John",
	lastName : "Doe",
	age : 25,
	location : "Amérique",
}

const student2: Student = {
	firstName : "Rachid",
	lastName : "Date",
	age : 104,
	location : "Nowhere"
}

const studentsList : Student [] = [student1, student2];

const table = document.createElement('table');

const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach((student) => {
  const line = document.createElement("tr");
  
  const firstNameCase = document.createElement("td");  

  firstNameCase.textContent = student.firstName;
  
  line.appendChild(firstNameCase);
  
  const locationCase =document.createElement("td");

  locationCase.textContent = student.location;

  line.appendChild(locationCase);

  tbody.appendChild(line);
});

document.body.appendChild(table);
