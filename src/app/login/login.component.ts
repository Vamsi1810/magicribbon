import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirthdayService } from '../birthday.service';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  errMess;
  res=null;
  confirm=false;
  constructor(private birthday: BirthdayService, private router:Router, private toastr: ToastrService) { }

  
  ngOnInit(): void {
    console.log(sessionStorage.length)
    if(sessionStorage.length!=0){
      console.log(this.birthday.user);
      this.router.navigate(['/home']);
    }
    console.log(this.birthday.user);
  }
  
  add()
  {
    this.birthday.getuser(this.email,this.password)
      .subscribe((details) => {
        this.res=details;
        if(this.res!=null)
        {
          this.birthday.emailname=this.email;
          // console.log(this.res);
          this.toastr.success('Success', 'Login Verified',{
            timeOut:2000,
            progressBar:true,
            closeButton:true
          });
          
          localStorage.setItem('user',JSON.stringify(this.res));
          sessionStorage.setItem('user',JSON.stringify(this.res));
          console.log(JSON.parse(localStorage.getItem('user')));
          this.birthday.user = JSON.parse(localStorage.getItem('user'));
          setTimeout(()=>{this.router.navigate(['/home']);},2000);
        }
      },(err)=>{
        console.log(err);
        this.toastr.error('Invalid Credentials','Login Failed',{
          timeOut:2000,
          progressBar:true,
          closeButton:true
        });
      });
  }
  
}
