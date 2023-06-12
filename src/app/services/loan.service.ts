import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  

  private apiUrl = 'https://localhost:7080/api/Loan/GetLoanDetails';
  private accUrl='https://localhost:7080/api/UserReg/getByAccountNum?accountnum'

  constructor(private http: HttpClient) { }

  getLoanDetail(loanId: number): Observable<any> {
    const url = `${this.apiUrl}/${loanId}`;
    return this.http.get<any>(url);
  }

  getOne(accountNum:string):Observable<any>{
    const url = `${this.accUrl}/${accountNum}`;
    return this.http.get<any>(url);
  }
 


}
