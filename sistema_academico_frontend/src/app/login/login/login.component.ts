import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  private _formLogin: FormGroup = this._formBuilder.group({
    id: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  signIn(): void {
    try {
      let id = this._formLogin.get('id')?.value;
      let password = this._formLogin.get('password')?.value;
      this._userService.findById(id).subscribe({
        next: (userData) => {
          if (userData.id === id && userData.password === password) {
            this.snackBar.open("✅ Bienvenido " + userData.name, "Cerrar", {
              duration: 2000
            });
            this._authService.login(userData);
            console.log(this._authService.getCurrentUser())
            switch (userData.role) {
              case 'PROFESOR':
                this._router.navigate(['app/inicio']);
                break;
              case 'ESTUDIANTE':
                this._router.navigate(['app/inicio']);
                break;
            }

          } else {
            this.snackBar.open("⛔ Usuario o contraseña incorrecta", "Cerrar", {
              duration: 2000
            });
          }
        },
        error: () => {
          this.snackBar.open("⛔ Usuario o contraseña incorrecta", "Cerrar", {
            duration: 2000
          });

        }
      });
    } catch (error) {
      console.log("ERROR en la api: ", error)
    }

  }

  public get isFormValid(): boolean {
    return this.formLogin.get('id')?.value && this.formLogin.get('password')?.value;
  }

  public get formLogin(): FormGroup {
    return this._formLogin;
  }


}
