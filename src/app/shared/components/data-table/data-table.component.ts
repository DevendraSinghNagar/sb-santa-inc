import { Component, Input, OnInit } from '@angular/core';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() tableHeader: any;
  @Input() tableData: any;
  page: number = 1;
  pageSize: number = 4;
  collectionSize: number = 0;
  data: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.collectionSize = this.tableData.length;
    this.refreshCountries();
  }

  refreshCountries() {
    this.data = this.tableData.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
    console.log(this.data);

  }

}
