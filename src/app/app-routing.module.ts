import { IngredientEditComponent } from './ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
const appRoutes: Routes = [
  {
    path: 'admin',
    component: HomeComponent
  },
   {
    path:'admin/ingredients',
    component:IngredientsComponent,
    children:[
      {
        path: 'new/:newIngredientId',
        component: IngredientEditComponent
      },
      {
        path: 'edit/:idIngredient',
        component: IngredientEditComponent
      }
    ]
  },
  {
    path:'admin/clients',
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
