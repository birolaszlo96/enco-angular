import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListPageComponent } from './pages/team-list.page.component';
import { TeamDetailsPageComponent } from './pages/team-details.page.component';
import { TeamCreatePageComponent } from './pages/team-create.page.component';
import { TeamEditPageComponent } from './pages/team-edit.page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: TeamListPageComponent },
  {
    path: 'create',
    component: TeamCreatePageComponent,
    canActivate: [AuthGuard]
  },
  { path: ':id', component: TeamDetailsPageComponent },
  {
    path: ':id/edit',
    component: TeamEditPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}
