import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   private _url:string ="/assets/data/empdata.json";
  constructor( private http:HttpClientModule) { }
  employeedata(){
    return this._url;
  }
}

