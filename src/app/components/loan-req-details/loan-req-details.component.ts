import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-req-details',
  templateUrl: './loan-req-details.component.html',
  styleUrls: ['./loan-req-details.component.css']
})
export class LoanReqDetailsComponent implements OnInit {
  loanId: number=0;
  loanDetails: any;

  constructor(private route: ActivatedRoute, private loanService: LoanService) {
    this.loanDetails = null;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loanId = +params['loanId'];
      this.loadLoanDetails(this.loanId);
    });
  }

  loadLoanDetails(loanId: number) {
    this.loanService.getLoanDetail(loanId).subscribe(data => {
      this.loanDetails = data;
    });
  }

}
