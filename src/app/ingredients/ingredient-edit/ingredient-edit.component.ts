import { IngredientService } from './../ingredient.service';
import { Ingredient } from './../ingredient.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class IngredientEditComponent implements OnInit {

  editMode = false;
  ingredientForm: FormGroup;
  ingredient:Ingredient={
     id:6,
     name:'',
     img:''
  };
  constructor(private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,private router:Router) {

    }

  ngOnInit() {
    this.initForm(this.ingredient);
    try {
        const params = this.route.snapshot.params;
        if(params.idIngredient){
          this.route.params.subscribe(params => {
            this.ingredientService.getIngredientByFind(params.idIngredient)
                  .subscribe(
                    (res:Ingredient) => {
                      console.log(res);
                      this.editMode=true;
                      this.ingredient=res;
                      this.initForm(this.ingredient);
                    },
                    err => console.log(err)
            )
          });
        }
        else if(params.newIngredientId){
          this.ingredient.id=params.newIngredientId;
          this.initForm(this.ingredient);
        }
    } catch (error) {
      console.log(error);
    }
  }
  onSubmit(){
    if (this.editMode) {
       this.ingredientService.updateIngredient(this.ingredientForm.value);
    }
    else{
      this.ingredientService.createIngredient(this.ingredientForm.value);
    }
    console.log(this.ingredientForm.value);
    setTimeout(() => {
      this.router.navigate(['/ingredients/']);
    }, 2200);

  }
  private initForm(ingredient:Ingredient) {
    this.ingredient=ingredient;
    try {
        this.ingredientForm = this.formBuilder.group({
          id:[this.ingredient.id,Validators.required],
          name:[this.ingredient.name,Validators.required],
          img:[this.ingredient.img,Validators.required]
        });

    } catch (error) {
      console.log(error);
    }
  }

}
