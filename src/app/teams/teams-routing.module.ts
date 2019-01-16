import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { TeamDetailsPageComponent } from './pages/team-details.page.component';

const routes: Routes = [
  { path: '', component: TeamListPageComponent },
  { path: ':id', component: TeamDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
