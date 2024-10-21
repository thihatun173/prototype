import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients'; // Ensure the Express server is running

  constructor(private http: HttpClient) {}

  createClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }

  getClients(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
