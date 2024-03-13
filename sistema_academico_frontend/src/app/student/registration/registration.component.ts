import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  datos: any[] = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      campos: this.fb.array([])
    });
  }

  ngOnInit() {
    this.agregarCampos();
  }

  get camposControls() {
    return (this.form.get('campos') as FormArray).controls;
  }

  borrarCampo(index: number) {
    const campos = this.form.get('campos') as FormArray;
    campos.removeAt(index);
  }

  borrarTodasFilas() {
    const campos = this.form.get('campos') as FormArray;
    while (campos.length > 0) {
      campos.removeAt(0);
    }
  }

  agregarCampos() {
    const campos = this.form.get('campos') as FormArray;
    campos.push(this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      cupo: ['', Validators.required]
    }));
  }



}
