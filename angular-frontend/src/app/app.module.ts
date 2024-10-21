import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' }, // Redirect to /clients by default
  { path: 'clients', component: ClientComponent } // Show ClientComponent for /clients
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Reconfirming the routes are set up
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap with AppComponent
})
export class AppModule { }
