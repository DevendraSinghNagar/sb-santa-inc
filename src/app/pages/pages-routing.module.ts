import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'delivery-list'
      },
      {
        path: 'delivery-list',
        loadChildren: () => import('./delivery-list/delivery-list.module').then(m => m.DeliveryListModule),
      },
      {
        path: 'legal',
        loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule)
      },
      {
        path: 'logout',
        component: DisconnectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
