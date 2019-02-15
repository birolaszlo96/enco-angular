import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { IUserModel } from '../../models/user.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {
  user: IUserModel = null;
  currentUserSubscription: Subscription;
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit() {
    this.isAuthenticated$ = this.authService.IsAuthenticated$;
    this.currentUserSubscription = this.authService.CurrentUser$.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  logout() {
    this.authService.logout();
  }
}
