interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 99,
  location: 'London'
}

const student2: Student = {
  firstName: "Boon",
  lastName: "Fire",
  age: 12,
  location: 'Grannies'
}
let studentslist: Student[] = [student1, student2]


let table = document.createElement('table');


let header = table.createTHead();
let headerRow = header.insertRow(0);
let headerCell1 = headerRow.insertCell(0);
let headerCell2 = headerRow.insertCell(1);
headerCell1.innerHTML = "<b>First Name</b>";
headerCell2.innerHTML = "<b>Location</b>";


for (let student of studentslist) {
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
}
document.body.appendChild(table);
