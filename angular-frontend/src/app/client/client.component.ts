import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  client = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmitClient() {
    console.log("Client Created:", this.client);
  }
}
