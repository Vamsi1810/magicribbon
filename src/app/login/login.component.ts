import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirthdayService } from '../birthday.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  // details;
  errMess;
  res;
  confirm=false;
  constructor(private birthday: BirthdayService, private router:Router) { }

  ngOnInit(): void {
  }

  add()
  {
    console.log(this.email,this.password);
    this.birthday.getuser(this.email,this.password)
      .subscribe((details) => {
        this.res=details;
        if(this.res!=null)
        {
          this.birthday.emailname=this.email;
          console.log(this.res);
          this.router.navigate(['/home']);
        }
      });
  }
  
}
