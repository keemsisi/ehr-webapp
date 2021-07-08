import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CustomHttpClientService } from '../Services/custom-http-client.service';
import {PatientModel} from "../Model/patient.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  patients: PatientModel[] =  [];

  constructor(private router :  Router , private httpClient: CustomHttpClientService, private fb: FormBuilder) { 
    this.loginForm =this.fb.group({
      "username" : new FormControl([ , [Validators.required , Validators.nullValidator]]),
      "password" : new FormControl([ , [Validators.required , Validators.nullValidator]])
    })
  }

  ngOnInit(): void{
    
  }

  changeEye(){
    let password = window.document.getElementById("i-password");
    if(password?.getAttribute("type") == "password"){
      password?.setAttribute("type" , "text");
    }else {
      password?.setAttribute("type" , "password");
    }
  }
  
  dashboard(){
    this.router.navigate(["/dashboard"]);
  }
}
