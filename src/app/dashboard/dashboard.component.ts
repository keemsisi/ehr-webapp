import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientModel } from '../Model/patient.model';
import { CustomHttpClientService } from '../Services/custom-http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients: PatientModel[] =  [];


  constructor(private httpClient: CustomHttpClientService, private fb: FormBuilder) {}
  ngOnInit(): void {
  }

  public getAllPatients() {
    const counter = setInterval(() => {
      this.httpClient.getAllPatients().subscribe(data => {
        console.log(data);
        this.patients = data;
        clearInterval(counter);
      }, (error: HttpErrorResponse) => {
        alert("failed to load patients");
      });
    }, 5000);
  }
  
}
