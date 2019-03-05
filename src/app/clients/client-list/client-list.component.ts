import { ClientService } from '../client.service';
import { EventEmitter, Output,Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ClientListComponent   implements OnInit {
  @Input() clients:Observable<Client[]>;
  @Output() clientDelete = new EventEmitter();
//https://dzone.com/articles/understanding-output-and-eventemitter-in-angular
//https://codecraft.tv/courses/angular/http/http-with-observables/
//https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
//https://blog.fullstacktraining.com/display-real-time-data-in-angular/
  constructor(private clientService:ClientService,private router:Router){
  }
  clientDeleted(idClient:number){
    this.clientDelete.emit(idClient);
  }
  ngOnInit() {
    this.onGetClients();
  }
  onGetClients(){
      this.clients = Observable
      .interval(1000)
      .startWith(0).switchMap(() => this.clientService.getClients());
  }
  goToClientProfile(idClient:number){
    this.router.navigate(['/clients/edit', idClient]);
  }
}
