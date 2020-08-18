import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { CurrencyComponent } from './currency/currency.component';
import { PagesComponent } from './pages/pages.component';
import { CompsComponent } from './comps/comps.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'cards', component: CardlistComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'comps', component: CompsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
