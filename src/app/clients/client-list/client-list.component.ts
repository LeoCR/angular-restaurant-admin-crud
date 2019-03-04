import { ClientService } from '../client.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Client } from '../client.model';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ClientListComponent   implements OnInit {
  clients:Client[];
//https://dzone.com/articles/understanding-output-and-eventemitter-in-angular
//https://codecraft.tv/courses/angular/http/http-with-observables/
//https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
  subscription: Subscription;
  constructor(private clientService:ClientService,private router:Router){
    clientService.getClients().subscribe(response =>
      {
        this.clients = response.map(client =>
        {
          return new Client(
              client.idClient,
              client.fullName,
              client.email,
              client.cellphone
          );
        });
      });
  }
  ngOnInit() {
    this.onGetClients();
  }
  onGetClients(){
    this.clientService.getClients().subscribe(
          res=>{
              this.clients=res;
      },
      (error)=>{
          console.error(error);
      });
  }
  goToClientProfile(idClient:number){
    this.router.navigate(['/clients/edit', idClient]);
  }
}
