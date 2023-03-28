import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';
import { PagesComponent } from './pages.component';
import { DisconnectComponent } from './disconnect/disconnect.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,

    PagesComponent,
     DisconnectComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
