import { ContactComponent } from './contact/contact.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { DatasComponent } from './datas/datas.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'datas',component:DatasComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
