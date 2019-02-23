import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatTabsModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SurveyComponent } from './survey/survey.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ApiService } from './services/api.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { TokenInterceptor } from './services/token.interceptor';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientComponent,
    FeedbackComponent,
    SurveyComponent,
    UserComponent,
    NavigationComponent,
    ViewUserComponent,
    AddUserComponent,
    RemoveUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [ApiService, AuthenticationService ,AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
