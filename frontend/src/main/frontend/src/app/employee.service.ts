import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class EmployeeService {

  constructor( private http:Http) { }
  getEmployees(){
    return this.http.get("http://localhost:8080/employees")
        .map(res => res.json());
  }
   addEmployee(info){
    return this.http.post("http://localhost:8080/employees",info)
        .map(res => res.json());
  }
  getEmployee(id){
    return this.http.get("http://localhost:8080/employees/"+id)
        .map(res => res.json());
  }
  deleteEmployee(id){
    return this.http.delete("http://localhost:8080/employees/"+id)
        //.map(res => res.json());
  }
  updateEmployee(id, info){
    return this.http.put("http://localhost:8080/employees/"+id,info)
        .map(res => res.json());
  }
}