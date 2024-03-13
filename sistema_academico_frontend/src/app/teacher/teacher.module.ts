import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { TeacherRoutingModule } from './teacher-routing.module';
import { GradesComponent } from './grades/grades.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecordFormComponent } from './grades/record-form/record-form.component';

@NgModule({
  declarations: [
    GradesComponent,
    RecordFormComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TeacherModule { }
