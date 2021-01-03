import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailsComponent } from './details/details.component';
// import { DetailsComponent } from './calendar/details/details.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FranceComponent } from './rank/france/france.component';
import { RankBundesligaComponent } from './Rank/rank-bundesliga/rank-bundesliga.component';
import { RankLaLigaComponent } from './Rank/rank-la-liga/rank-la-liga.component';

import { RankSerieAComponent } from './Rank/rank-serie-a/rank-serie-a.component';
import { RankComponent } from './rank/rank.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeBodyComponent },
  { path: 'Home', component: HomeBodyComponent },
  { path: 'Highlight', component: HighlightComponent },
  { path: 'Calendar', component: CalendarComponent },
  { path: 'Shop', component: ShopComponent },

  // { path: 'Calendar/details', component: DetailsComponent },
  { path: 'Rank', component: RankComponent },
  { path: 'Rank/LaLiga', component: RankLaLigaComponent },
  { path: 'Rank/SerieA', component: RankSerieAComponent },
  { path: 'Rank/Bundesliga', component: RankBundesligaComponent },
  { path: 'Rank/Ligue1', component: FranceComponent },
  { path: 'Shop/details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
