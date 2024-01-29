import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { coursesService } from '../services/courses.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  pass: string;
  isAccountCreated: boolean = false;
  displayMsg: string = '';

  constructor(private authService: coursesService,) { }


  registercoursesform = new FormGroup({

   
    CourseName: new FormControl('', [Validators.required]),
    CourseDescription: new FormControl('', [Validators.required]),
    CourseCredit: new FormControl('', [Validators.required])

  });
  get CourseName() {
    return this.registercoursesform.get('CourseName') as FormControl;
  }
  get CourseDescription() {
    return this.registercoursesform.get('CourseDescription') as FormControl;
  }
  get CourseCredit() {
    return this.registercoursesform.get('CourseCredit') as FormControl;
  }

  registercoursesSubmit(){


    this.authService.registercoursesSubmit([
      this.registercoursesform.value.CourseName,
      this.registercoursesform.value.CourseDescription,
      this.registercoursesform.value.CourseCredit,
      this.pass
    ]).subscribe(res => {
      if (res == 'Sucess') {
       // this.displayMsg = 'Account Created Successfully';
        //this.openSnackBar('Account Created Successfully', 'success-snackbar');
        this.isAccountCreated = true;
      } else if (res == 'AlreadyExist') {
        this.displayMsg = 'Account Alredy Exict';
        this.isAccountCreated = false;
      } else {
        this.displayMsg = 'Sucess';
        this.isAccountCreated = false;
      }


    })

  }











}
