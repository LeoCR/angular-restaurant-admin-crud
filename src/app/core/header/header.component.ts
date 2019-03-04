import { ClientService } from './../../clients/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nexIdClient:number;
  constructor(private clientService:ClientService,private router:Router){
  }
  ngOnInit() {
    this.clientService.countClients().subscribe(
      res => {
        this.nexIdClient=res[0]['totalClients']+1;
      }
    )
  }
  goToNewClient(){
    this.router.navigate(['/clients/new', this.nexIdClient]);
  }
}
