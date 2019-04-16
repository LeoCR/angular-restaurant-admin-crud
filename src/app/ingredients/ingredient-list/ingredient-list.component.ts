import { IngredientService } from './../ingredient.service';
import { Component, OnInit ,Input,Output,EventEmitter,ViewEncapsulation} from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients:Observable<Ingredient[]>;
  @Output() ingredientDelete = new EventEmitter();
  page:number=1;
  pageSize:number=8;
  collectionSize:number=20;
  searchTerm:string;
  constructor(private ingredientService:IngredientService){
  }
  ingredientDeleted(id:number){
      this.ingredientDelete.emit(id);
  }
  ngOnInit() {
      this.onGetIngredients()
  }
  onGetIngredients(){
    this.ingredientService.countIngredients().subscribe(
      res=>{
        this.collectionSize=res[0]['totalIngredients'];
      }
    )
    this.ingredients=this.ingredientService.getIngredients();
    /* this.ingredients = Observable
      .interval(1000)
      //.interval(900000)
      .startWith(0).switchMap(() => this.ingredientService.getIngredients()); */
  }
}
