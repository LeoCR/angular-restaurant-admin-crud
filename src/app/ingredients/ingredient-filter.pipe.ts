import { PipeTransform, Pipe } from "@angular/core";
import { IngredientService } from './ingredient.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
/**
 * https://seegatesite.com/angular-4-tutorial-create-custom-search-filter-pipe-in-html-table/
 */
@Pipe({
  name:'ingredientFilter',
  pure:false
})
export class IngredientFilterPipe implements PipeTransform{
  /* constructor(private ingredientService:IngredientService,private ingredients){
    this.ingredientService.getIngredients().subscribe(
      res=>{
        this.ingredients=res;
      }
    )
  }*/
  transform(items: any[], value: string, label:string): any[] {
    //var totalIngredients= this.ingredientService.getIngredients();
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
  }
}
