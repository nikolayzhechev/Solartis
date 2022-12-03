import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
// { AngularFireDatabaseModule } from '@angular/fire/compat/database;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    AuthModule,
    BrowserAnimationsModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
    // import Http client module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
