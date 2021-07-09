import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  profile_image: string = "assets/images/serious-asian.png";
  username: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
