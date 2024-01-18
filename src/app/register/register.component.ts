import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  StudentForm: FormGroup | undefined;
  name = "";
  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  }
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {

    this.StudentForm = this.formBuilder.group({
      name: [this.name, [Validators.required]],
      
    });


  }

  // doRegistration(Values: any) {
  //   this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
  //   if (this.user_records.some((v))=> {
  //     return v.email == this.data.email
  //   }) {
  //     alert("Duplicate Data");
  //   }
  //   else {
  //     this.user_records.push(this.data)
  //     localStorage.setItem("users",JSON.stringify(this.user_records));
  //     alert("Hi"+this.data.name+"You are sucessfully registerd");
  //   }
  // }
}
