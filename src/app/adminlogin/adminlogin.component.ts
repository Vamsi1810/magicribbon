import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email;
  password;
  public res;
  public confirm=false;
  constructor(private service: BirthdayService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  add()
  {
    console.log(this.email,this.password);
    this.service.getadminuser(this.email,this.password)
      .subscribe((details) => {
        this.res=details;
        if(this.res!=null)
        {
          this.service.emailname=this.email
          console.log(this.res);
          this.toastr.success('Success', 'Login Verified',{
            timeOut:2000,
            progressBar:true,
            closeButton:true
          });
          setTimeout(()=>{this.router.navigate(['/adminview']);},2000);
        }
      });
      this.toastr.error('Invalid Credentials','Login Failed',{
        timeOut:2000,
        progressBar:true,
        closeButton:true
      })
  }
}
