import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {

  }

  homeBtn(){
    this.router.navigate(['login'])
  }

  // regBtn() {
  //   this.router.navigate(['/register1']);
  // }
  // logBtn() {
  //   this.router.navigate(['/login']);
  // }
  showBtn() {
    this.router.navigate(['/Showuser']);
  }
  courseBtn() {
    this.router.navigate(['/courses'])
  }
  addsheduledBtn() {
    this.router.navigate(['/add-schedule'])
  }
  viewcoursesBtn(){
    this.router.navigate(['/viewcourses'])
  }
  viewsheduledBtn(){
    this.router.navigate(['/viewsheduled'])
  }


}
