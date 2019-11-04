import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent implements OnInit {

  model: any = [];
  policyNumber: string;
  accountName: string;

  columnDefs = [
    {headerName: 'Account Name', field: 'accountName', sortable: true, filter: true , resizable:true},
    {headerName: 'Policy Number', field: 'policyNumber', sortable: true, filter: true , resizable:true},
    {headerName: 'Effective Date', field: 'effectiveDate', sortable: true, filter: true , resizable:true},
    {headerName: 'Type', field: 'type', sortable: true, filter: true , resizable:true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true , resizable:true},
    {headerName: 'Producer Name', field: 'producerName', sortable: true, filter: true , resizable:true},
    {headerName: 'Producer Name', field: 'producerName', sortable: true, filter: true , resizable:true}
];

  rowData = [
    { accountName: 'Sorup Routaray', policyNumber: 'SF 1000', effectiveDate: "01-01-2019",  type : "New Business", producerName : "Test Producer", status : "Created"},
    { accountName: 'Sorup Routaray', policyNumber: 'SF 1000', effectiveDate: "01-01-2019",  type : "New Business", producerName : "Test Producer", status : "Bound"}
  ];
  
  constructor() { }

  ngOnInit() {
  }

  searchWorklist () {
    
  }

}
