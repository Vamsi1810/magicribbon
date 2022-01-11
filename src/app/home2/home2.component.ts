import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private service:BirthdayService) { }

  ngOnInit(): void {
  }
  result:string;
  func1(){
    this.result="Garland of balloons";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
  func2(){
    this.result="Balloon Arch";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
  func3(){
    this.result="Ballon filled with Candies";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
  func4(){
    this.result="Wall of Balloons";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
  func5(){
    this.result="Balloons tied to gifts";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
  func6(){
    this.result="Ballon with glowsticks";
    this.service.addDecoration_type(this.result);
    console.log(this.result);
  }
}
