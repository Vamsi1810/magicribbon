import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor( private service:BirthdayService ) { }
  ngOnInit(): void {
  }
  inp2
  home11(){
   this.inp2="Age between 1 to 8";
   this.service.addAge_group(this.inp2);
   console.log(this.inp2);
  }
  home12(){
    this.inp2="Age between 9 to 20";
    this.service.addAge_group(this.inp2);
    console.log(this.inp2);
  }
  home13(){
    this.inp2="Age between 21 to 35";
    this.service.addAge_group(this.inp2);
    console.log(this.inp2);
  }
  home14(){
    this.inp2="Age greater than 35";
    this.service.addAge_group(this.inp2);
    console.log(this.inp2);
  }
}
