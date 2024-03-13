import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { GradesStudentComponent } from './grades-student/grades-student.component';

const routes: Routes = [
  { path: 'matriculas', component: RegistrationComponent },
  { path: 'notas', component: GradesStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
