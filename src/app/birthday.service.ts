import { Injectable } from '@angular/core';
import { Order} from './order';
import { HttpClient }from '@angular/common/http';
import { signupSchema } from './signupSchema';
import { catchError } from 'rxjs/operators';
import { HttpErrorMsgService } from './http-error-msg.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {
  cust:Order[]=[];
  signupDetails:signupSchema;
  gender;
  age_group;
  dec_type;
  cake_type;

  emailname;
  user;
  constructor( private http:HttpClient, private HttpErrorMsg: HttpErrorMsgService ) { }
  addGender(gen)
  {
    this.gender=gen;
    console.log(this.gender);

  }
  addAge_group(age_group){
    this.age_group=age_group;
  }
  addDecoration_type(dec_type){
     this.dec_type=dec_type;
  }
  addCaketype(cake_type){
    this.cake_type=cake_type;
  }

  addOrder(ord)
  {
    console.log(ord);
    return this.http.post("http://localhost:4500/project/adduser",ord)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getuser(email,password)
  {
    return this.http.get(`http://localhost:4500/signup/getUser/${email}/${password}`)
     .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getadminuser(email,password)
  {
    return this.http.get(`http://localhost:4500/adminsignup/getUser/${email}/${password}`)
  }

  getDetails()
  {
    return this.http.get('http://localhost:4500/signup/getdetails')
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  postUser(User)
  {
    console.log(User);
    return this.http.post('http://localhost:4500/signup/adduser',User)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
  postadminUser(adminUser){
    console.log(adminUser);
    return this.http.post('http://localhost:4500/adminsignup/adduser',adminUser)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
  getadmindata()
  {
    return this.http.get('http://localhost:4500/project/results')
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  deleteuser(id)
  {
    return this.http.delete(`http://localhost:4500/project/delete/${id}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

}
