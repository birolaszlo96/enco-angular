import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home.page.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth-service';
import { FrameComponent } from './components/frame/frame.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdDemoPageComponent } from './pages/cd-demo.page.component';
import { DemoComponent } from './components/demo/demo.component';
import { AnimDemoPageComponent } from './pages/anim-demo.page.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    HomePageComponent,
    MenuComponent,
    LayoutComponent,
    LoginComponent,
    FrameComponent,
    CdDemoPageComponent,
    DemoComponent,
    AnimDemoPageComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [AuthService, AuthGuard],
  entryComponents: [LoginComponent]
})
export class CoreModule {}
