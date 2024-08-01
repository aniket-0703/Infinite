import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifierService {

  private apiUrl = 'http://localhost:3000/verifier';

  constructor(private http: HttpClient) {}


  createVerifier(member:any) {
    return this.http.post(this.apiUrl,member);
  }
  getVerifier():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }



  getVerifierById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
