import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth-service';

@Component({
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(
        private dialogRef: MatDialogRef<LoginComponent>,
        private auth: AuthService
    ) { }

    login(): void {
        if (this.auth.login(this.username, this.password)) {
            this.dialogRef.close();
        } else {
            alert('Wrong username or password!');
        }
    }
}
