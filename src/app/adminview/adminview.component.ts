import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  public details;
  public errMess;
  constructor(private service: BirthdayService) { }
  public email=this.service.emailname;
  ngOnInit(): void {
    this.service.getadmindata()
    .subscribe((details) => {this.details=details; console.log(this.details)}, (errMess)=> {this.errMess=errMess,this.details=null});
  }

  delete(id)
  {
    this.service.deleteuser(id)
    .subscribe();
    this.service.getadmindata()
    .subscribe((details) => {this.details=details; console.log(this.details)}, (errMess)=> {this.errMess=errMess,this.details=null});
  }

}
