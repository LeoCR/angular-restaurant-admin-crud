import { Client } from './../client.model';
import { ClientService } from './../client.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  encapsulation:ViewEncapsulation.None
})
//https://stackoverflow.com/questions/48631667/reactive-form-to-view-update-not-bound-to-formbuilder
export class ClientEditComponent implements OnInit {
  editMode = false;
  clientForm: FormGroup;
  client:Client={
     idClient:6,
     fullName:'',
     email:'',
     cellphone:''
  };
  constructor(private route: ActivatedRoute,
    private clientService: ClientService,
    private formBuilder: FormBuilder,private router:Router) {

    }

  ngOnInit() {
    this.initForm(this.client);
    try {
        const params = this.route.snapshot.params;
        if(params.idClient){
          this.route.params.subscribe(params => {
            this.clientService.getClientByFind(params.idClient)
                  .subscribe(
                    (res:Client) => {
                      console.log(res);
                      this.editMode=true;
                      this.client=res;
                      this.initForm(this.client);
                    },
                    err => console.log(err)
            )
          });
        }
        else if(params.newClientId){
          this.client.idClient=params.newClientId;
          this.initForm(this.client);
        }
    } catch (error) {
      console.log(error);
    }
  }
  onSubmit(){
    if (this.editMode) {
       this.clientService.updateClient(this.clientForm.value);
    }
    else{
      this.clientService.createClient(this.clientForm.value);
    }
    console.log(this.clientForm.value);
    setTimeout(() => {
      this.router.navigate(['/clients/']);
    }, 2200);

  }
  private initForm(client:Client) {
    this.client=client;
    try {
        this.clientForm = this.formBuilder.group({
          idClient:[this.client.idClient,Validators.required],
          fullName:[this.client.fullName,Validators.required],
          email:[this.client.email,Validators.required],
          cellphone:[this.client.cellphone,Validators.required]
        });

    } catch (error) {
      console.log(error);
    }
  }
}
