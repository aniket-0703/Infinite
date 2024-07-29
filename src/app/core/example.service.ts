import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    // For example, check if a token exists in localStorage
    return !!localStorage.getItem('token');
  }

  login(email: string | null, mobileNumber: string | null, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(user =>
          (user.email === email || user.mobileNumber === mobileNumber) &&
          user.password === password
        );
        if (user) {
          localStorage.setItem('token', 'fake-jwt-token');  // Store the token upon successful login
        }
        return user !== undefined;
      })
    );
  }
}
