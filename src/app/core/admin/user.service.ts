import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:3000/members';

  constructor(private http: HttpClient) {}

  createMember(member:any) {
    return this.http.post(this.apiUrl,member);
  }
  getMember():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }


  getEventById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
