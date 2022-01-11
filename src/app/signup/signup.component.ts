import { Component, OnInit } from '@angular/core';
import { signupSchema } from '../signupSchema';
import { BirthdayService } from '../birthday.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service: BirthdayService, private router:Router) { }
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
     alert("Your Signup is Successful with us");
     this.router.navigate(['login']);
    }
     if(this.password !== this.confpassword){
       alert("CHECK YOUR PASSWORD")
     } 
  }
}
