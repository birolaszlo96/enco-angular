import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsModule } from './teams/teams.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/components/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => CoreModule
  },
  {
    path: 'teams',
    component: LayoutComponent,
    loadChildren: () => TeamsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
