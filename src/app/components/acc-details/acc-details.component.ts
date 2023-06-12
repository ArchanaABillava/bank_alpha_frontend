import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';


@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css']
})
export class AccDetailsComponent {
  accountNum:any;
  constructor(
    private route:ActivatedRoute,
    private loan:LoanService
  ){}

  ngOnInit(){
    this.accountNum=this.route.snapshot.params['accountNum'];
    this.getOne();
  }

  getOne()
  {
    this.loan.getOne(this.accountNum).subscribe(data=>
      {
        console.log(data);
      })
  }

}
