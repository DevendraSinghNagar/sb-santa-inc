import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navClass: string = 'd-none d-sm-block';
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    if (this.navClass === 'd-none d-sm-block') {
      this.navClass = 'd-block';
    } else {
      this.navClass = 'd-none d-sm-block';
    }
  }
}
