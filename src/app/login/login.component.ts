import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const ACCOUNT = {
  username: 'admin',
  password: 'nimda321',
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public username: string | undefined;
  public password: string | undefined;
  public isLoading = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  login() {
    if (
      this.username &&
      this.username != '' &&
      this.password &&
      this.password != ''
    ) {
      this.isLoading = true;
      if (
        this.username === ACCOUNT.username &&
        this.password === ACCOUNT.password
      ) {
        this.router.navigate(['/pages/welcome']);
      } else {
        this.isLoading = false;
        this.snackBar.open('Username or password are incorrect!', 'OK', {
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    } else {
      this.snackBar.open('Please Input username and password!', 'OK', {
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }
}
