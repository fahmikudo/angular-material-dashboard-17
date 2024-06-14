import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-example-dialog',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './example-dialog.component.html',
  styleUrl: './example-dialog.component.scss',
})
export class ExampleDialogComponent implements OnInit {
  periodicForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.periodicForm = this.formBuilder.group({
      position: ['', Validators.required],
      name: ['', Validators.required],
      weight: ['', Validators.required],
      symbol: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.editData) {
      this.loadEditData();
    }
  }

  loadEditData(): void {
    this.periodicForm.setValue({
      position: this.editData.position,
      name: this.editData.name,
      weight: this.editData.weight,
      symbol: this.editData.symbol,
      description: this.editData.description,
    });
  }

  addPeriodic(): void {
    this.dialogRef.close();
  }
}
