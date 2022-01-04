import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {
  
  datalist: any;
  constructor( public dataserviceService : DataserviceService) { }

  ngOnInit(): void {
    // this.datalist =this.dataserviceService.getdata();


    this.dataserviceService.getdata().subscribe((ref: any) =>(this.datalist=ref))
  }

}
