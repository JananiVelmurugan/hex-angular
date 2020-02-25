import { Employee } from './employee';
class EmployeeTest {
  employee: Employee;
  constructor(employee: Employee) {
    this.employee = employee;
  }

  display(){
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.department.id);
    console.log(employee.department.name);
    for (var i = 0; i < employee.skills.length; i++) {
      console.log("Skill " + [i] + ": " + employee.skills[i].id + ", " + employee.skills[i].name);
    }
  }
}
let skill1 = { "id": 1001, "name": "HTML" };
let skill2 = { "id": 1002, "name": "CSS" };
let dept = { "id": 101, "name": "Training" };
let employee = { "id": 1, "name": "Janani", "department": dept, "skills": [skill1, skill2] };
let empObj = new EmployeeTest(employee);
empObj.display();