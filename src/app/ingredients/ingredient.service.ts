import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient} from "./ingredient.model";
@Injectable()
export class IngredientService{
    constructor(private httpClient:HttpClient){
    }
    getIngredients(): Observable<Ingredient[]>{
        return this.httpClient.get<Ingredient[]>('http://localhost:49452/api/ingredients',{
          observe:'body',
          responseType:'json'});
    }
    countIngredients(){
      return this.httpClient.get('http://localhost:49452/api/count/ingredients');
    }
    getIngredientByFind(id:string){
      return this.httpClient.get<Ingredient>('http://localhost:49452/api/ingredient/show/'+id);
    }
    deleteIngredientById(id:number){
      return this.httpClient.delete('http://localhost:49452/api/ingredient/delete/'+id);
    }
    createIngredient(Ingredient: any) {
      return this.httpClient.post('http://localhost:49452/api/ingredient/add/', Ingredient).subscribe(
          (val) => {
              console.log("POST call successful value returned in body", val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
                  console.log("The POST observable is now completed.");
          }
      );
    }
    updateIngredient(Ingredient: any) {
        return this.httpClient.put('http://localhost:49452/api/ingredient/update/' + Ingredient.id, Ingredient).subscribe(
          (val) => {
              console.log("PUT call successful value returned in body", val);
          },
          response => {
            console.log("PUT call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          }
      );
    }
}
