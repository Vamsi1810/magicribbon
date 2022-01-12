import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { AdmincompletedordersComponent } from './admincompletedorders/admincompletedorders.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminview',component:AdminviewComponent},
  {path:'customerorders',component:CustomerordersComponent},
  {path:'admincompletedorders',component:AdmincompletedordersComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
