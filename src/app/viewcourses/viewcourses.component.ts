import { Component } from '@angular/core';

//import { Component } from '@angular/core';
import { coursesService } from '../services/courses.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { coursesDto } from '../Dto/coursesDto';
import { Router } from '@angular/router';

//import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrl: './viewcourses.component.css'
})
export class ViewcoursesComponent {
  coursesList: any;
  selectedProduct: any;
  isupdate: boolean = true;

  //router: any;

constructor(private router: Router,private coursesService: coursesService) {
}



  courseBtn(coursesList : any) {

    //this.coursesService.selectedProduct$.subscribe((value) => {
      //this.selectedProduct = value;
    //});
    //this.isupdate = true;
    this.coursesService.setProduct(coursesList,this.isupdate);

    //this.isupdate = false;
    
   // console.log(coursesList);
   // const encodedObject = encodeURIComponent(JSON.stringify(coursesList));
//    const queryParams = { data: JSON.stringify(coursesList) };    
//console.log(encodedObject);
//debugger;
    this.router.navigate(['/courses']);
  };

  

  addData() {
    throw new Error('Method not implemented.');
  }
  // removeData(coursesList: any): void {
  //   const index = this.coursesList.indexOf(coursesList);
  //   if (index !== -1){
  //     this.coursesList.splice(coursesList,-1);
  //   }
  //   // throw new Error('Method not implemented.');
  // }
  removeData(CourseName:string) {
    this.coursesService.Deletecourses(CourseName).subscribe(td => {
      this.coursesList = td;
      
     console.log(this.coursesList);

     

    });
     window.location.reload();
    console.log(this.coursesList);
  }

  // refreshTable(): void {
  //   // Update your data source (this is just an example)
  //   this.coursesList = this.getDataFromSomeSource();

  //   // Trigger change detection
  //   this.cdr.detectChanges();
  // }

  displayedColumns: string[] = ['courseName', 'courseDescription', 'courseCredit','removeData','addData'];
  dataSource = new MatTableDataSource<coursesDto>;


  
  

  ngOnInit() {
    this.viewcourses();

  }

  viewcourses() {
    this.coursesService.GetAllcourses().subscribe(dataS => {
      this.coursesList = dataS;
      //this.dataSource = new MatTableDataSource(this.studentList);
      //console.log(dataS);
     console.log(this.coursesList);

    });
    console.log(this.coursesList);
  }

}


