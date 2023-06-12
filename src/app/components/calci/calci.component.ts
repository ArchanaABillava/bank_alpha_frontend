import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {
  calculate!: FormGroup;
  result: any;
  Emi: any;
  TotalAmt: any;
  TotalInt: any;
 
  constructor (private formBuilder: FormBuilder,
    private api: ApiService,private router:Router){
  }
  routeToLoanForm(){
    this.router.navigate(["applyLoan"])
  }
  ngOnInit() {
   
    this.calculate = this.formBuilder.group({
      loanAmount: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      tenure: ['', [Validators.required,Validators.pattern('^[0-9]*$'),Validators.pattern('^[0-9]*$'),Validators.min(3),Validators.max(300)]],
      interest: ['', [Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    });
  }

  onSubmit() {
    
    this.Emi = document.getElementById("resulta") as HTMLElement;
    this.TotalAmt = document.getElementById("resultb") as HTMLElement;
    this.TotalInt = document.getElementById("resultc") as HTMLElement;

    if (this.calculate.valid ) {

     
      this.api.calculateEMI(this.calculate.value).subscribe(res => {
        console.log(res);
      
        this.Emi.innerHTML = res["loanEMI"]
        this.TotalAmt.innerHTML = res["totalAmountPayable"]
        this.TotalInt.innerHTML = res["totalInterestPayable"]
        
      }, (err: any) => {
        console.log(err);
      })

    } else {
      this.calculate.markAllAsTouched();
    }
  }
    // calculateEMI(): void {
      
    //   const loanAmount = parseFloat((<HTMLInputElement>document.getElementById('loan-amount')).value);
    //   const loanTenure = parseInt((<HTMLInputElement>document.getElementById('loan-tenure')).value);
    //   const interestRate = parseFloat((<HTMLInputElement>document.getElementById('interest-rate')).value);
    //   const Tenure=loanTenure;
  
    //   const interest = interestRate / 12 / 100;
    //   const emi = (loanAmount * interest * Math.pow(1 + interest, Tenure)) / (Math.pow(1 + interest, Tenure) - 1);
    //   const totalAmountPayable = emi * Tenure;
    //   const totalInterestPayable = totalAmountPayable - loanAmount;
  
    //   (<HTMLDivElement>document.getElementById('emi')).textContent = emi.toFixed(2);
    //   (<HTMLDivElement>document.getElementById('total-amount')).textContent = totalAmountPayable.toFixed(2);
    //   (<HTMLDivElement>document.getElementById('total-interest')).textContent = totalInterestPayable.toFixed(2);

      
    // }

    
    

}
