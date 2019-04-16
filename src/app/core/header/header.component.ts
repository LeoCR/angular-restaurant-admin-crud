import { IngredientService } from './../../ingredients/ingredient.service';
import { ClientService } from './../../clients/client.service';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() finderChange = new EventEmitter();
  nexIdClient:number;
  nexIdIngredient:number;
  dataStorage:any;
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
  setDataToFind=(data:any)=>{
    //this.dataStorage=data;
  }
  goToNewClient(){
    this.router.navigate(['/admin/clients/new', this.nexIdClient]);
  }
  goToNewIngredient(){
    this.router.navigate(['/admin/ingredients/new', this.nexIdIngredient]);
  }
  submitSearch(event:any){
    console.log(event);
    var queryParam=event.target[0].value;
    console.log(queryParam);
    this.finderChange.emit(queryParam);
  }
  searchInLists(event:any){
      console.log(event);
      var queryParam=event.target.value;
      console.log(queryParam);
  }
}
