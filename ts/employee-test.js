function printEmp(emp) {
    console.log(emp.id);
    console.log(emp.name);
    console.log(emp.department.id);
    console.log(emp.department.name);
    for (var i = 0; i < emp.skills.length; i++) {
        console.log("Skill " + [i] + ": " + emp.skills[i].id + ", " + emp.skills[i].name);
    }
}
var skill1 = { "id": 1001, "name": "HTML" };
var skill2 = { "id": 1002, "name": "CSS" };
var dept = { "id": 101, "name": "Training" };
var employee = { "id": 1, "name": "Janani", "department": dept, "skills": [skill1, skill2] };
printEmp(employee);
