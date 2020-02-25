import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  

  employee:Employee = {
    id : 3,
    name :'John',
    permanent: true,
    department:{id: 101, name: "Training" },
    skills : [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" }
    ]
  }
  constructor() { }

  ngOnInit() {
  }
}
