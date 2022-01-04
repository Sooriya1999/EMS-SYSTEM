import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

   private _url:string ="/assets/empdata.json";
  getdata: any;

  constructor( private httpClient:HttpClient) { }

  employeedata(){
    this.httpClient.get('http://localhost:3000/data');
  }
}

