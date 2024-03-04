import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentDto } from '../Dto/StudentDto';


// export interface Studentdata {
//   //id:number;
//  // StuRegId: number;
//   StuName: string;
//   StuEmail: string;
//   StuMobNum: number;
//   DOB: string;
//   StuAddress: string;
//   Password: string;

// }
// const ELEMENT_DATA: Studentdata[] = [
//   { Id: 1, Name: 'Raveesha', Email: 'ravmain@gmail.com', Mobile: 9714298100, Address: '546/1 Sugatharama road ,kelaniya', Password: 'hgdsjhg' },
//   { Id: 2, Name: 'Saman', Email: 'saman@gmail.com', Mobile: 7885478558, Address: '89/1 gamapaha road ,gampha', Password: 'hfjdsgjhg' },
//   //{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},

// ];

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css',
  // standalone: true,
  // imports: [MatTableModule],
})


export class ShowuserComponent {
  studentList: any;

  addData() {
    throw new Error('Method not implemented.');
  }
  removeData(CourseName:number) {
    console.log(CourseName);
    this.studentService.Deletestudent(CourseName).subscribe(td => {
      this.studentList = td;
      
     

     

    });
    window.location.reload();
  }

  displayedColumns: string[] = [/*'StuRegId',*/'StuName', 'StuEmail', 'StuMobNum', 'DOB', 'StuAddress','removeData'];
  dataSource = new MatTableDataSource<StudentDto>;
  //studentList: StudentDto[] = [];

  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
    this.viewStudents();

  }

  viewStudents() {
    this.studentService.GetAllStudents().subscribe(dataS => {
      this.studentList = dataS;
      //this.dataSource = new MatTableDataSource(this.studentList);
      //console.log(dataS);
     console.log(this.studentList);

    });
    console.log(this.studentList);
  }

  



}
