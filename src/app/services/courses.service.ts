import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { coursesDto } from '../Dto/coursesDto';

@Injectable({
    providedIn: 'root'
  })

  export class coursesService{
    // registercoursesSubmit(arg0: string[]) {
    //   throw new Error('Method not implemented.');
    // }

    url="https://localhost:7073/api/Courses";

    constructor(private http:HttpClient){}

    GetAllcourses():Observable<coursesDto[]>{
        return this.http.get<coursesDto[]>(this.url);
    }

    registercoursesSubmit(courses: Array<string>){
        console.log (courses);
        return this.http.post(this.url,{
          
            CourseName: courses[0],
            CourseDescription: courses[1],
            CourseCredit: courses[2],
          
          
    
        }, {
          responseType:'text',
        });
      }




  }