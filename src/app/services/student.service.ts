import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { StudentDto } from '../Dto/StudentDto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // loginStudent(arg0: string[]) {
  //   throw new Error('Method not implemented.');
  // }

  url="https://localhost:7073/api/Student";

  constructor(private http:HttpClient) { }

  // GetAllStudents(){
  //   return this.http.get<StudentDto[]>(this.url);
  // }

  GetAllStudents(){
    return this.http.get("https://localhost:7073/api/Student",{

    });
  }



  // RegisterStudent(filters: StudentDto[]): Observable<any>{
  //   return this.http.post<any>(this.url, filters);
  // }
  RegisterStudent(Student: Array<string>){
    console.log (Student);
    return this.http.post(this.url,{
      StuName: Student[0],
      StuEmail: Student[1],
      StuMobNum: Student[2],
      DOB: Student[3],
      StuAddress: Student[4],
      Password: Student[5]
      

    }, {
      responseType:'text',
    });
  }


  loginStudent(loginInfo: Array<string>){
    return this.http.post(this.url+'/loginUser',{
      email: loginInfo[0],
      Password: loginInfo[1]
    }, {
      responseType:'text',
    } );
  }

  

}
