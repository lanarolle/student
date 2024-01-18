import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { StudentDto } from '../Dto/StudentDto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url="https://localhost:7073/api/" +"Student/";

  constructor(private http:HttpClient) { }

  GetAllStudents():Observable<StudentDto[]>{
    return this.http.get<StudentDto[]>(this.url);
  }

  // RegisterStudent(filters: StudentDto[]): Observable<any>{
  //   return this.http.post<any>(this.url, filters);
  // }
  RegisterStudent(Student: Array<string>){
    return this.http.post(this.url,{

    })
  }

}
