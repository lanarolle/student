import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { sheduledService} from '../services/sheduled.service';


@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrl: './add-schedule.component.css'
})
export class AddScheduleComponent {

  pass: string;
  isSheduledCreated: boolean = false;
  displayMsg: string = '';
  decodedObject: any;
  issheduled: boolean = false;
  

  constructor( private authService: sheduledService,private activateRouter: ActivatedRoute, private detect: ChangeDetectorRef
    , private router: Router) { }

    homeBtn(){
      this.router.navigate(['Admin-dashbord'])
    }


    registersheduledform = new FormGroup({
    courseName: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    day: new FormControl('', [Validators.required])

  });

  get courseName() {
    return this.registersheduledform.get('courseName') as FormControl;
  }
  
  get startTime() {
    return this.registersheduledform.get('startTime') as FormControl;
  }
  get endTime() {
    return this.registersheduledform.get('endTime') as FormControl;
  }
  
  get day() {
    return this.registersheduledform.get('day') as FormControl;
  }

  registersheduledSubmit(){

    if(this.issheduled == false){


      this.authService.registersheduledSubmit([
        this.registersheduledform.value.courseName,
        this.registersheduledform.value.startTime,
        this.registersheduledform.value.endTime,
        this.registersheduledform.value.day,
        this.pass

      ]).subscribe(res => {
        if (res === 'Sucess'){
          this.isSheduledCreated = true;
          this.registersheduledform.reset();
        } else if (res == 'exists') {
          this.displayMsg = 'Course Sheduled Allredy Exict';
          this.isSheduledCreated = false;
        }else{
          this.displayMsg = 'Sucess';
          this.isSheduledCreated = false;
        }
      })
    }



  }

}
