import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home.page.component';
import { CdDemoPageComponent } from './pages/cd-demo.page.component';
import { AnimDemoPageComponent } from './pages/anim-demo.page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cd', component: CdDemoPageComponent },
  { path: 'anim', component: AnimDemoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
