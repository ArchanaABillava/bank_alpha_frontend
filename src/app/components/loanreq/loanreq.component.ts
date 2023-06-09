import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-loanreq',
  templateUrl: './loanreq.component.html',
  styleUrls: ['./loanreq.component.css']
})
export class LoanreqComponent {
  LoanArray:any[]=[];
  isResultLoaded=false;
  slNo:number=1;
  accountNumber:number=0;
  loanID:number=0;
  otherEMI:number=0;
  loanType:string="";
  loanAmount:number=0;
  tenure:number=0;
  constructor(private http:HttpClient)
  {
    this.getAllLoanReq();
  }
  ngOnInit():void{

  }
  getAllLoanReq()
  {
    this.http.get("https://localhost:7080/api/Loan/GetLoanDetails")
    .subscribe((resultData:any)=>
    {
      this.isResultLoaded=true;
      console.log(resultData);
      this.LoanArray=resultData;
    });
  }


}
