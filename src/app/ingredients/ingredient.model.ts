export class Ingredient {
  public id:number;
  public name: string;
  public img: string;

  constructor(id:number,name: string, img: string) {
    this.id=id;
    this.name = name;
    this.img = img;
  }
}
