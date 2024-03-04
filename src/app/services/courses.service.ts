import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { coursesDto } from '../Dto/coursesDto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class coursesService{
    private product$ = new BehaviorSubject<any>({});
    private updatevar$ = new BehaviorSubject<boolean>(false);

    selectedProduct$ = this.product$.asObservable();
    selectedupdatevar$ = this.updatevar$.asObservable();

    // registercoursesSubmit(arg0: string[]) {
    //   throw new Error('Method not implemented.');
    // }
    setProduct(product: any,  isupdate: boolean ) {;
      this.product$.next(product);
      this.updatevar$.next(isupdate);


    }

    setIsUpdate(isupdate:boolean){
      this.updatevar$.next(isupdate);
    }
    url="https://localhost:7073/api/Courses";

    //https://localhost:7073/api/Sheduled

    GetAllcourses(){
      return this.http.get("https://localhost:7073/api/Courses",{
  
      });
    }

    Deletecourses(courseName : string){
      return  this.http.delete("https://localhost:7073/api/Courses/"+courseName
       );
    }
    


    constructor(private http:HttpClient){}

    // GetAllcourses():Observable<coursesDto[]>{
    //     return this.http.get<coursesDto[]>(this.url);
    // }

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

      update(courses: Array<string>){
        console.log (courses);
        return this.http.put(this.url,{
          
            CourseName: courses[0],
            CourseDescription: courses[1],
            CourseCredit: courses[2],
          
          
    
        }, {
          responseType:'text',
        });
      }




  }