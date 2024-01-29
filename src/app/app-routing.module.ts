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

const routes: Routes = [
 { path:"register1",
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
  component:HomeComponent
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
