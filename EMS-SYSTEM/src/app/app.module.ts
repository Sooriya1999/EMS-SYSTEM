import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DatasComponent } from './datas/datas.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ContactComponent } from './contact/contact.component';

import { DataserviceService } from './dataservice.service';
import { KsComponent } from './ks/ks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DatasComponent,
    AttendenceComponent,
    ContactComponent,
    KsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
