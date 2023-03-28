import { Component, OnInit } from '@angular/core';
import { tableData, tableHeader } from './delivery-data';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
  tableHeader: tableHeader[] = [
    {
      displayName: 'First Name',
      propertyName: 'firstName'
    },
    {
      displayName: 'Last Name',
      propertyName: 'lastName'
    },
    {
      displayName: 'Address',
      propertyName: 'address'
    },
    {
      displayName: 'Wishes',
      propertyName: 'wishes'
    }
  ];

  tableData: tableData[] = [
    {
      firstName: 'William',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'JRR',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Charles',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Agatha',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'William 2',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'JRR 2',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Charles 2',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Agatha 2',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'William 3',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'JRR 3',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Charles 3',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
    {
      firstName: 'Agatha 3',
      lastName: 'shake',
      address: 'England',
      wishes: 'Books',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
