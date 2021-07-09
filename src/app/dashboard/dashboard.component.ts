import { HttpErrorResponse } from '@angular/common/http';
import { Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientModel } from '../Model/patient.model';
import { CustomHttpClientService } from '../Services/custom-http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients: PatientModel[] = [];
  header1: boolean = true;
  // @ViewChild('sideNav', { read: ViewContainerRef, static: true })
  // private sideNav: ViewContainerRef = new ElementRef();

  constructor(private httpClient: CustomHttpClientService, private fb: FormBuilder,
    private inj: Injector, private resolver: ComponentFactoryResolver) { }
  async ngOnInit() {
    // const { SideMenuComponent } = await import('../side-menu/side-menu.component');
    // const centerContainerFactory = this.resolver.resolveComponentFactory(SideMenuComponent);
    // this.sideNav.createComponent(centerContainerFactory, undefined, this.inj);
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