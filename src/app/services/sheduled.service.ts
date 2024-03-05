import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { sheduledDto } from '../Dto/sheduledDto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class sheduledService {
  setProduct(sheduledList: any, isupdate: boolean) {
    throw new Error('Method not implemented.');
  }


  url = "https://localhost:7073/api/Sheduled";

  //https://localhost:7073/api/Sheduled


  constructor(private http: HttpClient) { }

  GetAllSheduled() {
    return this.http.get(this.url);
  }
  DeleteSheduled(sheduledId: number) {
    console.log(sheduledId);
    return this.http.delete(`https://localhost:7073/api/Sheduled/${sheduledId}`
    );
  }
  registersheduledSubmit(Sheduled: Array<string>) {
    console.log(Sheduled);
    return this.http.post(this.url, {

      courseName: Sheduled[0],
      startTime: Sheduled[1],
      endTime: Sheduled[2],
      day: Sheduled[3],
    }, {

      responseType: 'text', 

    });
  }
}