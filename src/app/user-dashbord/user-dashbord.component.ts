import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrl: './user-dashbord.component.css'
})
export class UserDashbordComponent {


  constructor(private router: Router) {

  }

  regBtn() {
    this.router.navigate(['/register1']);
  }
  logBtn() {
    this.router.navigate(['/login']);
  }
  userEnrollemtBtn() {
    this.router.navigate(['/user_enrollment']);
  }
  


}
