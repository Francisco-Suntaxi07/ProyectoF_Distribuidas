import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecordModel } from 'src/app/models/recordModel';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit {

  private _record: RecordModel = new RecordModel();
  private _formRecord: FormGroup = this._formBuilder.group({
    gradeHomework: [null, Validators.required],
    gradeProject: [null, Validators.required],
    gradeExam: [null, Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<RecordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RecordModel,
    private _formBuilder: FormBuilder,
    private recordService: RecordService,
    private snackBar: MatSnackBar,
  ) {
    this._record = data;
  }

  ngOnInit(): void {
    if (this._record) {
      this._formRecord.patchValue({
        gradeHomework: this._record.gradeHomework,
        gradeProject: this._record.gradeProject,
        gradeExam: this._record.gradeExam,
      });
    }
  }

  closeForm(): void {
    this.dialogRef.close();
  }

  saveForm() {
    this._record.gradeHomework = this._formRecord.get('gradeHomework')?.value;
    this._record.gradeProject = this._formRecord.get('gradeProject')?.value;
    this._record.gradeExam = this._formRecord.get('gradeExam')?.value;
    console.log(this._record);
    this.recordService.update(this._record).subscribe({
      next: () => {
        this.snackBar.open("✅ Notas Actualizadas correctamente " , "Cerrar", {
          duration: 3000
        });
      },
      error: (err) => {
        console.log("ERROR: " + err);
        this.snackBar.open("⛔ Ocurrio un error al actualizar notas", "Cerrar", {
          duration: 2000
        });
      }
    });

  }

  public get formRecord(): FormGroup {
    return this._formRecord;
  }

}
