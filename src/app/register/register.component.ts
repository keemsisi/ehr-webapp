import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  step: number = 1;
  newPatient: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newPatient = this.fb.group({
      status: ["", [Validators.required, Validators.minLength(4)]],
      name: ["", [Validators.required, Validators.minLength(2)]],
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      phone: ["", [Validators.required, Validators.minLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      address: ["", [Validators.required, Validators.minLength(20)]],
    })
  }

  ngOnInit(): void {
  }

  nextStep() {
    ++this.step;
  }

  previousStep() {
    --this.step;
  }

}
