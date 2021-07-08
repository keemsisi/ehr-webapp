import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderRegisterComponent } from './header-register/header-register.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboadrdContainerComponent } from './dashboadrd-container/dashboadrd-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSearchComponent,
    HeaderRegisterComponent,
    SideMenuComponent,
    DashboadrdContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
