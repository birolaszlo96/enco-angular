import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsModule } from './teams/teams.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'teams', loadChildren: () => TeamsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
