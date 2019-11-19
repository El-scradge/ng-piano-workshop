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
    HttpClientModule
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
