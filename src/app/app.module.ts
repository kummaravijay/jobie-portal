import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { JobiboxComponent } from './jobibox/jobibox.component';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CandidateprofileComponent } from './candidateprofile/candidateprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyjobComponent } from './myjob/myjob.component';
import { SavedjobsComponent } from './savedjobs/savedjobs.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './stepper/stepper.component';
import { PreviewComponent } from './preview/preview.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    JobiboxComponent,
    SigninComponent,
    CandidateprofileComponent,
    MyprofileComponent,
    MyjobComponent,
    SavedjobsComponent,
    StepperComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
