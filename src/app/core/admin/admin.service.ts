import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  createAdmin(admin:any) {
    return this.http.post(this.apiUrl,admin);
  }
}
