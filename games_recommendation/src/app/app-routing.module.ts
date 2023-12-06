import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormNewGameComponent } from './form-new-game/form-new-game.component';

const routes: Routes = [
{ path: '', component: AccueilComponent},
{ path: 'formnewgame', component: FormNewGameComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
