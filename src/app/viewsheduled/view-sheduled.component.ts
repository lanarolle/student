import { Component } from '@angular/core';
import { sheduledService } from '../services/sheduled.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { sheduledDto } from '../Dto/sheduledDto';


@Component({
  selector: 'app-view-sheduled',
  templateUrl: './view-sheduled.component.html',
  styleUrl: './view-sheduled.component.css'
})
export class ViewSheduledComponent {
sheduledList:any;



displayedColumns: string[] = [/*'sheduledId',*/'courseName', 'startTime', 'endTime', 'day'];
  dataSource = new MatTableDataSource<sheduledDto>;

  constructor(private sheduledService: sheduledService) {

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
