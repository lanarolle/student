import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: any;

  constructor(private authService: StudentService, private router: Router

  ) { }

  homeBtn(){
    this.router.navigate([''])
  }



  loginform = new FormGroup({

    useremail: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),

  });

  get useremail() {
    return this.loginform.get('useremail') as FormControl;
  }
  get Password() {
    return this.loginform.get('Password') as FormControl;
  }

  loginSubmit() {
    this.authService.loginStudent([
      this.loginform.value.useremail,
      this.loginform.value.Password
    ]).subscribe(res => {
      if (res == "falire") {
        alert("Login Unsucess");
      }
      else {

        this.user = JSON.parse(res);
        console.log(this.user.userRole);
        if (this.user.userRole == false) {
          this.router.navigateByUrl('/user-dashbord');
        }


        if (this.user.userRole == true) {
          this.router.navigateByUrl('/Admin-dashbord');
        }
      }

    })
  }
}



