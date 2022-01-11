import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {

  constructor(private service:BirthdayService) { }
   result:string;
  ngOnInit(): void {
  }
  func1(){
    this.result="Black Forest Gateau";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func2(){
    this.result="Pineapple Cake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func3(){
    this.result="Eggless Truffle Cake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func4(){
    this.result="Coffee Cake with Mocha Frosting";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func5(){
    this.result="Fudgy Chocolate Cake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func6(){
    this.result="Mango Meringue Cake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func7(){
    this.result="Oreo Cheesecake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func8(){
    this.result="Banana Cake with Cream Cheese Frosting";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func9(){
    this.result="Cherry Cheesecake";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
  func10(){
    this.result="Coffee Cake with Kahlua Chocolate Ganache";
    this.service.addCaketype(this.result);
    console.log(this.result);
  }
}
