import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { coursesService } from '../services/courses.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  pass: string;
  isAccountCreated: boolean = false;
  displayMsg: string = '';
  //activateRouter: any;

  constructor(private authService: coursesService, private activateRouter: ActivatedRoute ) { }


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
      if (res === 'Sucess') {
       // this.displayMsg = 'Account Created Successfully';
        //this.openSnackBar('Account Created Successfully', 'success-snackbar');
        this.isAccountCreated = true;
        this.registercoursesform.reset();
      } else if (res == 'exists') {
        this.displayMsg = 'Course Alredy Exict';
        this.isAccountCreated = false;
      } else {
        this.displayMsg = 'Sucess';
        this.isAccountCreated = false;
      }


    })

  }

  ngOnInit(){

    this.activateRouter.queryParams.subscribe((params) =>   {

      const CourseName = params['data'];
      if(CourseName){
      const decodedObject = JSON.parse(decodeURIComponent(CourseName));
      //console.log(decodedObject);
      this.registercoursesform=decodedObject;
      console.log(this.registercoursesform.value.CourseName);


      }
      
    })


  }











}

