import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { coursesService } from '../services/courses.service';
import * as bcrypt from 'bcryptjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Sheduledservice2Service } from '../services/sheduledservice2.service';
@Component({
  selector: 'app-sheduled',
  templateUrl: './sheduled.component.html',
  styleUrl: './sheduled.component.css',
  // standalone: true,
  // imports: [MatTableModule],
})
export class SheduledComponent {

  pass: string;
  isSheduledCreated: boolean = false;
  displayMsg: string = '';
  decodedObject: any;
  issheduled: boolean = false;

  constructor( private activateRouter: ActivatedRoute, private detect: ChangeDetectorRef
    , private router: Router) { }


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
}