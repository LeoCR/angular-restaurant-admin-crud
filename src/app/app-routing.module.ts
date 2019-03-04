import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
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
    component:ClientListComponent,
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
