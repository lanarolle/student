import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  // standalone: true,
  // imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class LandingpageComponent {

  constructor(private router: Router) {

  }
 // router: any;

  logBtn() {
    this.router.navigate(['/login']);
  }

}
