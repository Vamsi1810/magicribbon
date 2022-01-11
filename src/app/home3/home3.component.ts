import { Component, OnInit } from '@angular/core';
import {BirthdayService} from '../birthday.service';
import { Birthdayint } from '../birthdayint';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  public gen:string;
  public name:string;
  public age:number;
  public noofattendees:number;
  public cakequantity:number;
  public splarrangements:string;
  public date:Date;
  public phone:number;
  public age_grp:string;
  public decorat_type:string;
  public cake_type:string;
  public email:string;
  public address:string;
  public details;
  constructor(private service:BirthdayService,public dialog: MatDialog) { }
  // age_group:string=this.service.cust.age_group;
  // gender:string=this.service.cust.gender;
  // decoration_type:string=this.service.cust.decoration_type;
  ngOnInit(): void {
    this.gen=this.service.gender;
    this.age_grp=this.service.age_group;
    this.decorat_type=this.service.dec_type;
    this.cake_type=this.service.cake_type;
  }
  onSubmit(name:string,age:number,noofattendees:number,cakequantity:number,splarrangements:string,date:Date,phone:number,email:string,address:string){
    this.name=name;
    this.age=age;
    this.noofattendees=noofattendees;
    this.cakequantity=cakequantity;
    this.splarrangements=splarrangements;
    this.date=date;
    this.phone=phone;
    this.email=email;
    this.address=address;
     const custome:Birthdayint={
       name:this.name,
       gender:this.gen,
       age_group:this.age_grp,
       age:this.age,
       decoration_type:this.decorat_type,
       no_of_attendees:this.noofattendees,
       cake_type:this.cake_type,
       cake_quantity:this.cakequantity,
       special_arrangements:this.splarrangements,
       dateofarrangement:this.date,
       phone:this.phone,
       email:this.email,
       address:this.address
     };
    // this.service.cust.push(custome);
    console.log(custome);
    this.service.addOrder(custome)
     .subscribe((details) => {this.details=details});
     alert("Your Order is Placed. press Ok to continue");
  }

  // openDialog() {
  //   this.dialog.open(DialogTemplate);
  // }

}

export class DialogTemplate{

}
