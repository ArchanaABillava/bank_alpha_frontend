import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoaneligibleComponent } from './components/loaneligible/loaneligible.component';
import { AuthlogComponent } from './components/authlog/authlog.component';
import { LoandetailsComponent } from './components/loandetails/loandetails.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CalciComponent } from './components/calci/calci.component';
import { LoanstatusComponent } from './components/loanstatus/loanstatus.component';
import { LoantypeComponent } from './components/loantype/loantype.component';
import { LoanpdfComponent } from './components/loanpdf/loanpdf.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'loaneligible',component:LoaneligibleComponent},
  {path:'authlog',component:AuthlogComponent},
  {path:'applyLoan',component:LoandetailsComponent},
  // {path:"",component:HomeComponent,canActivate:[AuthGuard]},
  {path:'',component:UserhomeComponent,canActivate:[AuthGuard]},
  {path:'calci',component:CalciComponent},
  {path:'status',component:LoanstatusComponent},
  {path:'loantype',component:LoantypeComponent},
  {path:'loanpdf',component:LoanpdfComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
