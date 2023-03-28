import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    NgbPaginationModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class SharedModule { }
