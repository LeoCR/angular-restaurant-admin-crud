import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'clients',
    component:ClientsComponent,
    children:[
      {
        path: 'new/:newClientId',
        component: ClientEditComponent
      },
      {
        path: 'edit/:idClient',
        component: ClientEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
