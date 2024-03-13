import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CursoModel } from 'src/app/models/cursoModel';
import { RecordModel } from 'src/app/models/recordModel';
import { UsersModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  user: UsersModel = new UsersModel();
  listRecordsTeacher: RecordModel[] = [];
  filteredListRecords: RecordModel[] = [];
  listCoursesTeacher: CursoModel[] = [];
  selectedCourse: string = "";
  private _listRecords: RecordModel[] = [];
  private _listCourses: CursoModel[] = [];


  constructor(
    private authService: AuthService,
    private recordService: RecordService,
    private courseService: CursoService
  ) { }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser !== null) {
      this.user = currentUser;
    }
    this.loadRecords();
    this.loadCourses();
  }

  loadRecords() {
    this.recordService.findAll().subscribe({
      next: (dataList) => {
        this._listRecords = dataList;
        for (let i = 0; i < this._listRecords.length; i++) {
          if (this.user.name == this._listRecords[i].nameTeacher) {
            this.listRecordsTeacher.push(this._listRecords[i]);
          }

        }
      },
      error: (err) => {
        console.log("ERROR: " + err);
      }
    });
  }

  loadCourses() {
    this.courseService.findAll().subscribe({
      next: (dataList) => {
        this._listCourses = dataList;
        const uniqueIds: { [key: string]: boolean } = {};
        for (let i = 0; i < this._listCourses.length; i++) {
          for (let j = 0; j < this.listRecordsTeacher.length; j++) {
            if (this.listRecordsTeacher[j].nameCourse == this._listCourses[i].name) {
              const course = this.listCoursesTeacher.find((item) => item.id === this._listCourses[i].id);
              if (!course) {
                this.listCoursesTeacher.push(this._listCourses[i]);
              }
            }
          }
        }
      },
      error: (err) => {
        console.log("ERROR: " + err);
      }
    });
  }

  filterRecords() {
    this.filteredListRecords = []
    for (let i = 0; i < this.listRecordsTeacher.length; i++) {
      if (this.listRecordsTeacher[i].nameCourse == this.selectedCourse) {
        this.filteredListRecords.push(this.listRecordsTeacher[i]);
      }
    }
  }

}
