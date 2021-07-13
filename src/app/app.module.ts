import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpInterceptor } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { BulletinService } from './bulletin.service';
import { CreateComponent } from './create/create.component';
import {HttpClientXsrfModule} from '@angular/common/http';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BulletinComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule
  ],
  providers: [AuthService, BulletinService, AuthGuard, LogService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
