import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
  title = 'Hello World App Works!';
  myForm: any;

  employees: Employee;
  model = new Employee();
  chgid:number;

  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.empService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      })
  }

  addEmployee() {
    if (!this.model.id){
    this.empService.addEmployee(this.model)
      .subscribe(employees => {
        this.model = employees;
        this.getEmployees();
      });
    }
    else {
      console.log('editEmployee ' + this.model.id);
       this.empService.updateEmployee(this.model.id,this.model)
      .subscribe(employees => {
        this.model = employees;
        this.getEmployees();
      });
    }
  }

  deleteEmployee(id) {
    this.empService.deleteEmployee(id)
      .subscribe(() => {
        this.getEmployees();
      });
  }

  editEmployee(id){
    //console.log('updateEmployee ' + id);
    this.empService.getEmployee(id)
        .subscribe(employee=>{
          this.model = employee;
        })
  }

 getEmployee(id){
    this.empService.getEmployee(id)
        .subscribe(employee=>{
          this.model = employee;
        })
  }
}
