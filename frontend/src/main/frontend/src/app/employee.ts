export class Employee{
    id:number;
    name: string;
    position: string;
    department: string;
    salary: string;

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}