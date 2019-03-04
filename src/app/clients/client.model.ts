export class Client {
  public idClient:number;
  public fullName: string;
  public email: string;
  public cellphone: string;

  constructor(idClient:number,fullName: string, email: string, cellphone: string) {
    this.fullName = fullName;
    this.email = email;
    this.cellphone = cellphone;
    this.idClient=idClient;
  }
}
