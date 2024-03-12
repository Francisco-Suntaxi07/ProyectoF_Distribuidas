import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  hide = true;

  private _formLogin: FormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor (
    public modalRef: MatDialogRef<SignInComponent>,
    private _formBuilder: FormBuilder,
    private _router: Router
  ){}

  signIn(): void {
    this._router.navigate(['app']);
    this.closeSignIn();
  }

  closeSignIn(): void {
    this.modalRef.close();
  }

  public get isFormValid(): boolean {
    return this.formLogin.get('username')?.value && this.formLogin.get('password')?.value;
  }

  public get formLogin(): FormGroup {
    return this._formLogin;
  }
}
