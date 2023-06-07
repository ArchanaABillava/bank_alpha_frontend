import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private apiUrl = 'https://localhost:7080/api/UserReg/registers'; 
  
    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  }
