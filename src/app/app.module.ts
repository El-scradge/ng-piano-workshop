import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './home/home.component';
import { PolishingComponent } from './polishing/polishing/polishing.component';
import { RestorationsComponent } from './restorations/restorations/restorations.component';
import { RebuildsComponent } from './rebuilds/rebuilds.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesService} from "./services/articles.service";
import {ApiCallsService} from "./services/api-calls.service";
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireFunctionsModule} from "@angular/fire/functions";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolishingComponent,
    RestorationsComponent,
    RebuildsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFireFunctionsModule,
      AngularFireStorageModule
  ],
  providers: [
    SharedModule,
    ArticlesService,
    ApiCallsService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
