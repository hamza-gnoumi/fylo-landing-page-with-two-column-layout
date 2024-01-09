import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { AboutFyloComponent } from './components/about-fylo/about-fylo.component';
import { EarlyAccessComponent } from './components/early-access/early-access.component';
import { FooterFyloComponent } from './components/footer-fylo/footer-fylo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    AboutFyloComponent,
    EarlyAccessComponent,
    FooterFyloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
