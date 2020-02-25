import {Department}  from './department';
import {Skill}  from './skill';
export class Employee{
 id : number;
 name : string;
 permanent: boolean;
 department: Department;
 skills :Skill[];
}