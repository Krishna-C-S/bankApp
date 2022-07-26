import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="perfect banking partner"
  uname=""
acno=""
pswd=""

registerForm=this.fb.group({
  acno:'',
  pswd:'',
  uname:''
})
  constructor(private ds:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

register(){
  var acno=this.acno
  var uname=this.uname
  var pswd=this.pswd

  const result= this.ds.register(uname,acno,pswd)

  if(result){
    alert("Successfully Registered")
    this.router.navigateByUrl('')
  }
  else{
    alert("Already Existing User...Please Log In!!!")
  }

}
}
