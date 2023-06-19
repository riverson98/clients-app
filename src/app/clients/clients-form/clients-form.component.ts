import { Component } from '@angular/core';

import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent {

  client: Client;
  success: boolean = false;
  errorMsg: String;

  constructor(private service : ClientsService){
    this.client = new Client()
   }

  onSubmit(){
    this.service
      .save(this.client)
      .subscribe({
        next: (success) => this.success = true,
        error:(error) => this.errorMsg = error.error.message
  })
  }
}
