import { Component, OnInit } from '@angular/core';
import { PatientModel } from '../Model/patient.model';
import { CustomHttpClientService } from '../Services/custom-http-client.service';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.scss']
})
export class PatientslistComponent implements OnInit {

  profile_image: string = "assets/images/serious-asian.png";
  username: string = "";
  displayedColumns: string[] = ["#", "name", "gender", "age", "phone", "address", "btn"];
  // headers: Array<String> = ["Name" , "Gender" ,  "Age" , "Phone Number" , "Address"];
  patientsList: PatientModel[] = [];
  constructor(private http : CustomHttpClientService) { }
  ngOnInit(): void {
    this.getAllPatiens();
  }

  getAllPatiens(){
    this.http.getAllPatients().subscribe(data => {
      this.patientsList = data;
    })
  }
}
