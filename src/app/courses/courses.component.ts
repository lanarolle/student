import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { coursesService } from '../services/courses.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit{

  pass: string;
  isAccountCreated: boolean = false;
  displayMsg: string = '';
  //activateRouter: any;
   decodedObject: any;

  constructor(private authService: coursesService, private activateRouter: ActivatedRoute,private detect: ChangeDetectorRef
    ,private coursesService: coursesService ) { }


  registercoursesform = new FormGroup({
    courseName: new FormControl('', [Validators.required]),
    courseDescription: new FormControl('', [Validators.required]),
    courseCredit: new FormControl('', [Validators.required])

  });

  get CourseName() {
    return this.registercoursesform.get('courseName') as FormControl;
  }
  get CourseDescription() {
    return this.registercoursesform.get('courseDescription') as FormControl;
  }
  get CourseCredit() {
    return this.registercoursesform.get('courseCredit') as FormControl;
  }

  registercoursesSubmit(){


    this.authService.registercoursesSubmit([
      this.registercoursesform.value.courseName,
      this.registercoursesform.value.courseDescription,
      this.registercoursesform.value.courseCredit,
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
debugger;
  // this.coursesService.setProduct();
 // this.registercoursesform.setValue(this.coursesService.selectedProduct$);
 this.coursesService.selectedProduct$.subscribe(val =>{
  this.registercoursesform.setValue(val);
 })
    this.activateRouter.queryParams.subscribe((params) =>   {
      console.log("hi");

      const CourseName = params['data'];
      if(CourseName){
       this.decodedObject = JSON.parse(CourseName);
       //console.log(decodedObject);
       this.update();


      }
      
    }
    )
  }

  update(){
    console.log(this.decodedObject.courseCredit);
    this.registercoursesform.value.courseCredit = this.decodedObject.courseCredit;
  }











}

