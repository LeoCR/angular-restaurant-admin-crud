import { Client } from './client.model';
import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
@Injectable()
export class ClientService{
    clientsChanged = new Subject<Client[]>();
    constructor(private httpClient:HttpClient){
    }
    getClients(): Observable<Client[]>{
        return this.httpClient.get<Client[]>('http://localhost:49652/api/client',{
          observe:'body',
          responseType:'json'});
    }
    countClients(){
      return this.httpClient.get('http://localhost:49652/api/count/clients');
    }
    getClientByFind(idClient:number){
      return this.httpClient.get<Client>('http://localhost:49652/api/client/show/'+idClient);
    }
    deleteClientById(idClient:number){
      return this.httpClient.delete('http://localhost:49652/api/client/delete/'+idClient);
    }
    createClient(Client: any) {
      return this.httpClient.post('http://localhost:49652/api/client/add/', Client).subscribe(
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
    updateClient(Client: any) {
        return this.httpClient.put('http://localhost:49652/api/client/update/' + Client.idClient, Client).subscribe(
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
