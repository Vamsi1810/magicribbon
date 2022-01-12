import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirthdayService } from '../birthday.service';
import { adminsignupSchema } from '../adminsignupSchema';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  constructor(private service:BirthdayService , private router:Router, private toastr: ToastrService) { }
  bgimg1:string="/assets/signupbackground.jpg";
  ngOnInit(): void {
  }
Uniqueid:string="MAGICRIBBON1234";
  id:string;
  name:string;
  mobile:number;
  email:string;
  password:string;
  confpassword:string;
  saveAdminDetails(){
    if((this.password === this.confpassword) && (this.Uniqueid ===this.id)){
     const details:adminsignupSchema={
       id:this.id,
       name:this.name,
       mobile:this.mobile,
       email:this.email,
       password:this.password
     }
     console.log(details);
     this.service.postadminUser(details)
     .subscribe();
     this.toastr.success('please login', 'Success',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    });
    setTimeout(()=>{this.router.navigate(['adminlogin']);},2000);
    }
     if((this.password !== this.confpassword) || (this.Uniqueid !==this.id)){
      this.toastr.error('Check Passwords or ID','Registration Failed',{
        timeOut:2000,
        progressBar:true,
        closeButton:true
      })
     } 
  }

}
