import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class StudentModule { }
