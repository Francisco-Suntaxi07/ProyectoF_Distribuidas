import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CursoModel } from 'src/app/models/cursoModel';
import { UsersModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: UsersModel = new UsersModel();
  form: FormGroup;
  datos: any[] = [];
  cursos: CursoModel[] = [];
  nombresCursosSeleccionados: string[] = []; 
  numCupoSeleccionado: number[] = [];

  constructor(private fb: FormBuilder, private cursoService: CursoService,private authService: AuthService,) {
    this.form = this.fb.group({
      campos: this.fb.array([])
    });
  }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser !== null) {
      this.user = currentUser;
    }
    this.agregarCampos();
    this.obtenerCursos();
  }

  get camposControls() {
    return (this.form.get('campos') as FormArray).controls;
  }

  borrarCampo(index: number) {
    const campos = this.form.get('campos') as FormArray;
    campos.removeAt(index);
    this.nombresCursosSeleccionados.splice(index, 1);
    this.numCupoSeleccionado.splice(index, 1);
  }

  borrarTodasFilas() {
    const campos = this.form.get('campos') as FormArray;
    while (campos.length > 0) {
      campos.removeAt(0);
      this.nombresCursosSeleccionados.shift();
      this.numCupoSeleccionado.shift();
    }
  }

  agregarCampos() {
    const campos = this.form.get('campos') as FormArray;
    campos.push(this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      places: ['', Validators.required]
    }));
    this.nombresCursosSeleccionados.push('');
    
  }

  obtenerCursos() {
    this.cursoService.findAll().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  mostrarNombre(selectedId: string | number, index: number) {
    const curso = this.cursos.find(curso => curso.id === selectedId);
    if (curso) {
      this.nombresCursosSeleccionados[index] = curso.name || 'Nombre no disponible';
    } else {
      this.nombresCursosSeleccionados[index] = 'Curso no encontrado';
    }
  }



}
