import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { TeacherRoutingModule } from './teacher-routing.module';
import { GradesComponent } from './grades/grades.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    GradesComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class TeacherModule { }
