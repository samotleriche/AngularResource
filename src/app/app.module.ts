import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PasswordComponent } from './password/password.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConvertPipe } from './convert.pipe';
import { PagesComponent } from './pages/pages.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { CompsComponent } from './comps/comps.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PasswordComponent,
    CardlistComponent,
    ChallengeComponent,
    CurrencyComponent,
    ConvertPipe,
    PagesComponent,
    ClassDirective,
    TimesDirective,
    CompsComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
