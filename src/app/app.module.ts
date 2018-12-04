import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// forms
// import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

import { UserResolver } from './shared/user.resolver';
import { UserService } from './shared/user.service';
import { MuroComponent } from './components/muro/muro.component';


import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { CodeQrComponent } from './components/code-qr/code-qr.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SubmitComponent } from './components/submit/submit.component';
import { Submit2Component } from './components/submit2/submit2.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { BotonSalidaComponent } from './boton-salida/boton-salida.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MuroComponent,
    StartComponent,
    CodeQrComponent,
    ConfirmationComponent,
    SubmitComponent,
    Submit2Component,
    FirstPageComponent,
    BotonSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxQRCodeModule

  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
