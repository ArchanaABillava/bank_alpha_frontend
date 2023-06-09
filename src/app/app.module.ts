import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoaneligibleComponent } from './components/loaneligible/loaneligible.component';
import { AuthlogComponent } from './components/authlog/authlog.component';
import { NgxLoadingModule } from "ngx-loading";
import { LoandetailsComponent } from './components/loandetails/loandetails.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { CalciComponent } from './components/calci/calci.component';
import { LoanstatusComponent } from './components/loanstatus/loanstatus.component';
import { LoantypeComponent } from './components/loantype/loantype.component';
import { LoanpdfComponent } from './components/loanpdf/loanpdf.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LoaneligibleComponent,
    AuthlogComponent,
    LoandetailsComponent,
    NavbarComponent,
    UserhomeComponent,
    CalciComponent,
    LoanstatusComponent,
    LoantypeComponent,
    LoanpdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
