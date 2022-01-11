import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirthdayService } from '../birthday.service';
import { adminsignupSchema } from '../adminsignupSchema'
@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  constructor(private service:BirthdayService , private router:Router) { }
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
     alert("Your Signup is Successful with us");
     this.router.navigate(['adminlogin']);
    }
     if((this.password !== this.confpassword) || (this.Uniqueid !==this.id)){
       alert("CHECK YOUR PASSWORD OR UNIQUE ID")
     } 
  }

}
