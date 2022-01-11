import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service : BirthdayService) { }
  public email=this.service.emailname;
  ngOnInit(): void {
  }

}
