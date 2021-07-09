import { Component, OnInit } from '@angular/core';
import { PatientModel } from '../Model/patient.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  profile_image: string = "assets/images/serious-asian.png";
  username: string = "";
  displayedColumns: string[] = ["#", "name" , "gender" ,  "age" , "phone" , "address" , "btn"];
  // headers: Array<String> = ["Name" , "Gender" ,  "Age" , "Phone Number" , "Address"];
  patientsList: PatientModel[] = [
    {
        "name": "Adeshina",
        "gender": "Male",
        "age": "34",
        "phone": "+234 4232322121",
        "address": "testongggggggg",
        "profileImage" : "assets/images/user2.png"

    },
    {
        "name": "Omolola",
        "gender": "female",
        "age": "14",
        "phone": "+234 89232322121",
        "address": "11, Vincent Street",
        "profileImage" : "assets/images/user5.png"
    },
    {
        "name": "Adeola",
        "gender": "female",
        "age": "23",
        "phone": "+234 89232322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user2.png"
    },
    {
        "name": "Keemsdesh",
        "gender": "male",
        "age": "14",
        "phone": "+234 89232322121",
        "address": "11, Kiodlae Street Olafei",
        "profileImage" : "assets/images/user7.png"
    },
    {
        "name": "Kudirate",
        "gender": "male",
        "age": "15",
        "phone": "+234 239332322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user1.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "18",
        "phone": "+1 89232322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user4.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "10",
        "phone": "+24 891112121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user6.png"

    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "19",
        "phone": "+34 8232322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user7.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "24",
        "phone": "+234 09232322",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user6.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "22",
        "phone": "+234 232323231",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user5.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "34",
        "phone": "+11 1232322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user4.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "34",
        "phone": "+134 8933322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user3.png"
    },
    {
        "name": "Adeshina",
        "gender": "male",
        "age": "33",
        "phone": "+234 81322121",
        "address": "Testingggggggggggg",
        "profileImage" : "assets/images/user4.png"
    },
    {
        "name": "Kolawole",
        "gender": "male",
        "age": "31",
        "phone": "+234 2232322121",
        "address": "11, Ajagunhgade Street Mafoluku",
        "profileImage" : "assets/images/user1.png"
    }
];
  constructor() { }
  ngOnInit(): void {
  }

}
