import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewGradesComponent } from './view-grades/view-grades.component';

const routes: Routes = [
  { path: 'matriculas', component: RegistrationComponent },
  { path: 'notas', component: ViewGradesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
