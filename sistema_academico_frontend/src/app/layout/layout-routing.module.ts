import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'profesor', loadChildren: () => import('../teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'estudiante', loadChildren: () => import('../student/student.module').then(m => m.StudentModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
