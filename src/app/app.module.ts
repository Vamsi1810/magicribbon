import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BirthdayService } from './birthday.service';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { HttpErrorMsgComponent } from './http-error-msg/http-error-msg.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { AdmincompletedordersComponent } from './admincompletedorders/admincompletedorders.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AdminsignupComponent,
    AdminloginComponent,
    AdminviewComponent,
    HttpErrorMsgComponent,
    CustomerordersComponent,
    AdmincompletedordersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    ToastrModule.forRoot()
  ],
  providers: [BirthdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
