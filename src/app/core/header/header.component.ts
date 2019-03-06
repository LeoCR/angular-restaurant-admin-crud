import { IngredientService } from './../../ingredients/ingredient.service';
import { ClientService } from './../../clients/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nexIdClient:number;
  nexIdIngredient:number;
  constructor(private clientService:ClientService,
    private ingredientService:IngredientService,
    private router:Router){
  }
  ngOnInit() {
    this.ingredientService.countIngredients().subscribe(
      res=>{
        this.nexIdIngredient=res[0]['totalIngredients']+1;
      }
    )
    this.clientService.countClients().subscribe(
      res => {
        this.nexIdClient=res[0]['totalClients']+1;
      }
    )
  }
  goToNewClient(){
    this.router.navigate(['/admin/clients/new', this.nexIdClient]);
  }
  goToNewIngredient(){
    this.router.navigate(['/admin/ingredients/new', this.nexIdIngredient]);
  }
}
