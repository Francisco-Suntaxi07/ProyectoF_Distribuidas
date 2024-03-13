import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CursoModel } from 'src/app/models/cursoModel';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  datos: any[] = [];
  cursos: CursoModel[] = [];

  constructor(private fb: FormBuilder, private cursoService: CursoService) {
    this.form = this.fb.group({
      campos: this.fb.array([])
    });
  }

  ngOnInit() {
    this.agregarCampos();
    this.obtenerCursos();
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

  obtenerCursos() {
    this.cursoService.findAll().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

}