import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';
import {Order} from '../order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : BirthdayService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    
  }

  UserDetails = this.service.user;
  type;venue;attendees;contact;food;decorations;date;others;
  
  orderdetails;
  submit(){
    console.log(this.UserDetails);
    const order:Order={
      name : this.UserDetails.name,
      email : this.UserDetails.email,
      phone: this.contact,  
      venue : this.venue,
      dates : this.date,
      decoration:this.decorations,
      no_of_attendees:this.attendees,
      food:this.food,
      type_of_ocassion:this.type,
      others:this.others
    };
    this.service.addOrder(order)
     .subscribe((details) => {
       this.orderdetails=details;
       this.toastr.success('Success','Order Placed',{
          timeOut:2000,
          progressBar:true,
          closeButton:true
      })
      },(err)=>{
        this.toastr.error('Please try again','Order Failed',{
          timeOut:2000,
          progressBar:true,
          closeButton:true
        })
      });
  }
}