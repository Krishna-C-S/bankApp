import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties
  // string interpolation
  aim="perfect banking partner"

  // property binding
accno="Account number"
acno=""
pswd=""
  //database

loginForm=this.fb.group({
  acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})
  constructor(private router:Router,private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //userdefined function

// event binding using $event
acnoChange(event:any){
  this.acno =event.target.value
  console.log(this.acno);
  
}

pswdChange(event:any){
  this.pswd =event.target.value
  console.log(this.pswd);
}


  // event binding
  // using ngModel
  login(){
if(this.loginForm.valid) {
  var acno = this.loginForm.value.acno
  var pswd = this.loginForm.value.pswd

  const result = this.ds.login(acno,pswd)

  if(result){
      alert("Login Successful")
      this.router.navigateByUrl('dashboard')
    }
}
else{
  alert("Invalid user credential!!!")
}

}   
  // template referencing variable
  // login(a:any,p:any){
  //   var acno = a.value
  //   var pswd = p.value
  //   let db = this.db

  //   if(acno in db){
  //     if(pswd == db[acno]["password"]){
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else{
  //     alert("User does not exist")
  //   }
  // }

}
