import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {
 
  constructor (private router: Router){
  }
  routeToLoanForm(){
    this.router.navigate(["applyLoan"])
  }
    calculateEMI(): void {
      
      const loanAmount = parseFloat((<HTMLInputElement>document.getElementById('loan-amount')).value);
      const loanTenure = parseInt((<HTMLInputElement>document.getElementById('loan-tenure')).value);
      const interestRate = parseFloat((<HTMLInputElement>document.getElementById('interest-rate')).value);
      const Tenure=loanTenure*12;
  
      const interest = interestRate / 12 / 100;
      const emi = (loanAmount * interest * Math.pow(1 + interest, Tenure)) / (Math.pow(1 + interest, Tenure) - 1);
      const totalAmountPayable = emi * Tenure;
      const totalInterestPayable = totalAmountPayable - loanAmount;
  
      (<HTMLDivElement>document.getElementById('emi')).textContent = emi.toFixed(2);
      (<HTMLDivElement>document.getElementById('total-amount')).textContent = totalAmountPayable.toFixed(2);
      (<HTMLDivElement>document.getElementById('total-interest')).textContent = totalInterestPayable.toFixed(2);

      
    }

    
    

}
