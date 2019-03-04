import {OnInit, Component } from '@angular/core';
import {ClientService} from "./clients/client.service";
import { Client } from './clients/client.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clients:Client[]=[
  ];
  constructor(private clientService:ClientService){
  }
  ngOnInit() {
    this.onGet();
  }
  onGet(){
      this.clientService.getClients().subscribe(
          (clients:Client[])=>{
              this.clients=clients;
              console.log(clients);
      },
      (error)=>{
          console.error(error);
      });
  }
}
