import { Department } from './department';
import { Skill } from './Skill';
export interface Employee {
  id: number;
  name: string;
  department: Department;
  skills: Skill[];
}
