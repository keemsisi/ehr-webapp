import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomHttpClientService } from '../Services/custom-http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  step: number = 1;
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  allStepValidated: boolean = false;

  constructor(private fb: FormBuilder, private http: CustomHttpClientService) {
    this.step1 = this.fb.group({
      //step1 formgroup
      title: ["", [Validators.required, Validators.minLength(4)]],
      surname: ["", [Validators.required, Validators.minLength(2)]],
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      middleName: ["", [Validators.required, Validators.minLength(2)]],
      phone: ["", [Validators.required, Validators.minLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      gender: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });

    this.step2 = this.fb.group({
      ethnicity: ["", [Validators.required]],
      religion: ["", [Validators.required]],
      maritalStaus: ["", [Validators.required]],
      occupation: ["", [Validators.required]],
      bloodGroup: ["", [Validators.required]],
      patientType: ["", [Validators.required]],
      natonality: ["", [Validators.required]],
      stateOfOrgin: ["", [Validators.required]],
      localGoverment: ["", [Validators.required]],
      stateOfResidence: ["", [Validators.required]],
    });

    this.step3 = this.fb.group({
      fullName: ["", [Validators.required]],
      relationship: ["", [Validators.required]],
      nokPhone: ["", [Validators.required]],
      nokAddress: ["", [Validators.required]],
    });

    this.step4 = this.fb.group({
      sponsorBilling: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.step == 4) { }
    else {
      ++this.step;
    }
  }

  previousStep() {
    --this.step;
  }

  uploadProfilePicture() {

  }

  registerPatient() {

  }

  createPatient() {
    let results = [this.step1 ,this.step2 , this.step3, this.step4],
    result = results.reduce(function (r, a) {
        return Object.assign(r, a);
    }, {});
    this.http.createPatient(result)
  }
}