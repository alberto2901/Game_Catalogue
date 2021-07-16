import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { ResultGamesComponent } from './components/result-games/result-games.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: ResultGamesComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
