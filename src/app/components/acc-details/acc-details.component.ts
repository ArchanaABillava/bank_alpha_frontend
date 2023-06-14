import { Component } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css']
})
export class AccDetailsComponent {
  
LoanArray:any[]=[];
  isResultLoaded=false;
  constructor(private http:HttpClient)
  {
    this.getUserDetail();
  }
  
  ngOnInit():void{
    
  }

  getUserDetail()
    {
      this.http.get("https://localhost:7080/api/LoanReq/getByAccountNumUserDetails")
      .subscribe((resultData:any)=>
      {
        this.isResultLoaded=true;
        console.log(resultData);
        this.LoanArray=resultData;
      });
    }

}
