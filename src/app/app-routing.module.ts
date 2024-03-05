import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { Register1Component } from './register1/register1.component';
import { SheduledComponent } from './sheduled/sheduled.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { ViewSheduledComponent } from './viewsheduled/view-sheduled.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserEnrollmentComponent } from './user-enrollment/user-enrollment.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';


const routes: Routes = [
 {path:"register1",
  component:Register1Component
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"Showuser",
  component:ShowuserComponent
},

{
  path:"courses",
  component:CoursesComponent
},
{
  path:"",
  component:LandingpageComponent
},
{
  path:"sheduled",
  component:SheduledComponent
},
{
  path:"viewcourses",
  component:ViewcoursesComponent
},
{
  path:"viewsheduled",
  component:ViewSheduledComponent
},
{
  path:"user-dashbord",
  component:UserDashbordComponent
},
{
  path:"user-enrollment",
  component:UserEnrollmentComponent
},
{
  path:"add-schedule",
  component:AddScheduleComponent
},
{
  path:"Admin-dashbord",
  component:HomeComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
