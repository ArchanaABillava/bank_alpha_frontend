import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://localhost:7080/api/Loan/";
  private fileurl = "https://localhost:7080/api/Files";
  private loanUrl="https://localhost:7080/api/Loan/GetLoanDetails";

  constructor(private http:HttpClient) { }

  getInterestByLoanType(loanType: string): Observable<number> {
    const url = `${this.baseUrl}getInterest?loanType=${loanType}`; 
    return this.http.get<number>(url);
  }
  getLoanDetailsById(loanId: Int16Array): Observable<any> {
    const url = `${this.loanUrl}getInterest?loanType=${loanId}`; 
    return this.http.get<any>(url);
  }

  applyLoan(loanObj:any){
    const url = `${this.baseUrl}applyLoan`;
    return this.http.post<any>(url,loanObj);
  }

  uploadFile(formData:any){
    return this.http.post<any>(this.fileurl,formData);
  }
}
