import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormSigninComponent } from './components/form-signin/form-signin.component';
import { HometargetComponent } from './components/hometarget/hometarget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormLoginComponent,
    FormSigninComponent,
    HometargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
