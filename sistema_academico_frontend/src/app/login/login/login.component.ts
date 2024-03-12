import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  
  private _formLogin: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  constructor (
    private _formBuilder: FormBuilder,
    private _router: Router
  ){}

  signIn(): void {
    this._router.navigate(['app/inicio']);
    
  }

  public get isFormValid(): boolean {
    return this.formLogin.get('username')?.value && this.formLogin.get('password')?.value;
  }

  public get formLogin(): FormGroup {
    return this._formLogin;
  }
  

}
