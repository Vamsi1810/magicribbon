import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : BirthdayService) { }
  
  ngOnInit(): void {
  }
  value1="";
  image1:string ="/assetss/birthday-1.jpg";
  button1(val1:string){
     this.value1=val1;
    this.service.addGender(val1);
  }
}
