import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'https://localhost:7080/api/Loan/GetLoanDetails';

  constructor(private http: HttpClient) { }

  getLoanDetail(loanId: number): Observable<any> {
    const url = `${this.apiUrl}/${loanId}`;
    return this.http.get<any>(url);
  }
 


}
