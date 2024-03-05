import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ShowuserComponent } from './showuser/showuser.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CoursesComponent } from './courses/courses.component';
import { Register1Component } from './register1/register1.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { ViewSheduledComponent } from './viewsheduled/view-sheduled.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserEnrollmentComponent } from './user-enrollment/user-enrollment.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {MatIconModule} from '@angular/material/icon';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
//import { SheduledComponent} from './sheduled/sheduled.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ShowuserComponent,
    CoursesComponent,
    Register1Component,
    ViewSheduledComponent,
    ViewcoursesComponent,
    ViewSheduledComponent,
    UserDashbordComponent,
    UserEnrollmentComponent,
    LandingpageComponent,
    AddScheduleComponent
    //SheduledComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot([
      // Define your routes here
    ]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
