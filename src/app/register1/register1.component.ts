import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrl: './register1.component.css'
})
export class Register1Component {

  pwdFocus = false;
  RepeatPass: string = "none";
  displayMsg: string = '';
  isAccountCreated: boolean = false;
  hide = true;
  saltRounds = 10;
  pass: string;


  // student = {
  //   //  firstName: '',
  //   //  lastName: '',
  //   //  email: '',
  //   //  dateOfBirth: '',
  //   // StuName: '',
  //   // StuEmail: '',
  //   // StuMobNum: '',
  //   // DOB: '',
  //   // StuAddress: '',
  //   // Password: '',

  // };
  constructor(private authService: StudentService, private snackBar: MatSnackBar,private router: Router) { }

  homeBtn(){
    this.router.navigate(['login'])
  }

  //onSubmit() {
  //   //     // Implement your form submission logic here
  //  console.log('Form submitted:', this.student);
  //   //     // You can send the form data to a backend server or perform other actions
  // }
  registerform = new FormGroup({

    StuName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    StuEmail: new FormControl('', [Validators.required, Validators.email]),
    StuMobNum: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$'), Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    StuAddress: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    rpwd: new FormControl('', [Validators.required])

  });

  get StuName() {
    return this.registerform.get('StuName') as FormControl;
  }
  get StuEmail() {
    return this.registerform.get('StuEmail') as FormControl;
  }
  get StuMobNum() {
    return this.registerform.get('StuMobNum') as FormControl;
  }
  get DOB() {
    return this.registerform.get('DOB') as FormControl;
  }
  get StuAddress() {
    return this.registerform.get('StuAddress') as FormControl;
  }
  get Password() {
    return this.registerform.get('Password') as FormControl;
  }
  get rpwd() {
    return this.registerform.get('rpwd') as FormControl;
  }


  registerSubmit() {

    if (this.Password.value == this.rpwd.value) {
      this.RepeatPass = "none";

      this.pass = bcrypt.hashSync(this.registerform.value.Password, 10);

      this.authService.RegisterStudent([
        this.registerform.value.StuName,
        this.registerform.value.StuEmail,
        this.registerform.value.StuMobNum,
        this.registerform.value.DOB,
        this.registerform.value.StuAddress,
        this.registerform.value.Password,
        this.pass


      ]).subscribe(res => {
        if (res == 'Sucess') {
         // this.displayMsg = 'Account Created Successfully';
          this.openSnackBar('Account Created Successfully', 'success-snackbar');
          this.isAccountCreated = true;
        } else if (res == 'AlreadyExist') {
          this.displayMsg = 'Account Alredy Exict';
          this.isAccountCreated = false;
        } else {
          this.displayMsg = 'Somthing went wrong';
          this.isAccountCreated = false;
        }


      })
    }
    else {
      this.RepeatPass = 'inline';
    }
  }
  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000, // Adjust duration as needed
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [panelClass] // Position the snackbar at the top
    });
  }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-registration',
//   templateUrl: './student-registration.component.html',
//   styleUrls: ['./student-registration.component.css']
// })
// export class StudentRegistrationComponent {
//   student = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     dateOfBirth: '',
//     // Add other fields as needed
//   };

//   onSubmit() {
//     // Implement your form submission logic here
//     console.log('Form submitted:', this.student);
//     // You can send the form data to a backend server or perform other actions
//   }
}
