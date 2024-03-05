import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { coursesService } from '../services/courses.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {

  pass: string;
  isAccountCreated: boolean = false;
  displayMsg: string = '';
  //activateRouter: any;
  decodedObject: any;
  iscourse: boolean = false;

  constructor(private authService: coursesService, private activateRouter: ActivatedRoute, private detect: ChangeDetectorRef
    , private coursesService: coursesService, private router: Router) { }

    homeBtn(){
      this.router.navigate(['Admin-dashbord'])
    }


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

  registercoursesSubmit() {

    if(this.iscourse == false){

    

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
  }else{
    this.authService.update([
      this.registercoursesform.value.courseName,
      this.registercoursesform.value.courseDescription,
      this.registercoursesform.value.courseCredit,
      this.pass
    ]).subscribe((res)=>{
      this.iscourse=false;
      this.registercoursesform.reset();
      this.coursesService.setProduct({},false);
      //this.registercoursesform.patchValue( {'orderNo':null} );
     // window.location.reload();
      this.router.navigate(['/viewcourses']);
    })
    // this.iscourse=false;
    // this.registercoursesform=null
    // new Promise<void>((resolve) => {
    //   window.location.reload();
    //   setTimeout(() => {
    //     this.router.navigate(['/viewcourses']);
    //   }, 3000); 
    // })
    // .then(() => {
    //   // Once the reload is complete, navigate to the specified route
    // });

  }

  }

  ngOnInit() {

    // this.coursesService.setProduct();
    // this.registercoursesform.setValue(this.coursesService.selectedProduct$);
    this.coursesService.selectedProduct$.subscribe(val => {
      this.registercoursesform.setValue(val);
    })
    this.coursesService.selectedupdatevar$.subscribe(val => {
      this.iscourse=val;
    })
    
 

    this.activateRouter.queryParams.subscribe((params) => {
      //console.log("hi");

   

    }
    )
  }

  // update() {
  //   console.log(this.decodedObject.courseCredit);
  //   this.registercoursesform.value.courseCredit = this.decodedObject.courseCredit;
  // }











}

