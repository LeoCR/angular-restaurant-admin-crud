import { IngredientService } from './ingredient.service';
import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal,private ingredientService:IngredientService) {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }
    else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }
  deleteIngredient(idClient:number,content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.ingredientService.deleteIngredientById(idClient)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(idClient);
  }
}
