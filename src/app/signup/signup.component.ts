import { Component, OnInit } from '@angular/core';
import { signupSchema } from '../signupSchema';
import { BirthdayService } from '../birthday.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service: BirthdayService, private router:Router, private toastr: ToastrService) { }
  name;
  mobile;
  email;
  password;
  confpassword;
  signupdetails;

  // status:boolean=false;

  ngOnInit(): void {
  }
  bgimg1:string="/assets/signupbackground.jpg";

  saveDetails(){
    if(this.password === this.confpassword){
     const details:signupSchema={
       name:this.name,
       mobile:this.mobile,
       email:this.email,
       password:this.password
     }
     console.log(details);
     this.service.postUser(details)
     .subscribe();
     this.toastr.success('please login', 'Success',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    });
    setTimeout(()=>{this.router.navigate(['login']);},2000);
    }
     if(this.password !== this.confpassword){
      this.toastr.error('Check Passwords','Registration Failed',{
        timeOut:2000,
        progressBar:true,
        closeButton:true
      })
     } 
  }
}
