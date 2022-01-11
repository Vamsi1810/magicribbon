import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';
import { Router } from '@angular/router';

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
  constructor(private service: BirthdayService, private router: Router) { }

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
          this.router.navigate(['/adminview']);
        }
      });
  }
}
