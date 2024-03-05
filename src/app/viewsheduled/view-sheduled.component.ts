import { Component } from '@angular/core';
import { sheduledService } from '../services/sheduled.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { sheduledDto } from '../Dto/sheduledDto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-sheduled',
  templateUrl: './view-sheduled.component.html',
  styleUrl: './view-sheduled.component.css'
})
export class ViewSheduledComponent {

  sheduledList: any;
  isupdate: boolean = true;



  displayedColumns: string[] = ['courseName', 'startTime', 'endTime', 'day', 'removeData'];
  dataSource = new MatTableDataSource<sheduledDto>;


  constructor(private sheduledService: sheduledService,private router: Router) {

  }

  homeBtn(){
    this.router.navigate(['Admin-dashbord'])
  }

  // addData(CourseName: string) {
  //   throw new Error('Method not implemented.');
  // }

  addData(sheduledList : any) {

    //this.coursesService.selectedProduct$.subscribe((value) => {
      //this.selectedProduct = value;
    //});
    //this.isupdate = true;
    this.sheduledService.setProduct(sheduledList,this.isupdate);

    //this.isupdate = false;
    
   // console.log(coursesList);
   // const encodedObject = encodeURIComponent(JSON.stringify(coursesList));
//    const queryParams = { data: JSON.stringify(coursesList) };    
//console.log(encodedObject);
//debugger;
    this.router.navigate(['/sheduled']);
  };


  removeData(courseName: number) {

    console.log(courseName);
    this.sheduledService.DeleteSheduled(courseName).subscribe(td => {
      this.sheduledList = td;

      console.log(this.sheduledList);



    });
     window.location.reload();
     console.log(this.sheduledList);
  }


  

  ngOnInit() {
    this.viewsheduled();

  }

  viewsheduled() {
    this.sheduledService.GetAllSheduled().subscribe(dataS => {
      this.sheduledList = dataS;
      //this.dataSource = new MatTableDataSource(this.studentList);
      //console.log(dataS);
      console.log(dataS);
    });
    console.log(this.sheduledList);
  }

}
