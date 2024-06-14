import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent implements OnInit {
  displayedColumns = [
    'position',
    'name',
    'weight',
    'symbol',
    'description',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(private dialog: MatDialog) {}

  isLoadingResults: boolean = true;
  resultsLength: number = 0;
  currentPage: number = 1;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.getPage(this.currentPage);
  }

  getPage(page: number) {
    this.isLoadingResults = true;
    // simulation
    this.delay(1000).then(() => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(
        this.getData(this.currentPage)
      );
      this.isLoadingResults = false;
      this.resultsLength = 100;
    });
  }

  ngOnInit() {
    this.currentPage = 0;
    this.dataSource.paginator = this.paginator;
    this.getPage(this.currentPage);
  }

  // just shuffle
  getData(page: number): Array<PeriodicElement> {
    const dataSource = [
      {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
    ];
    let currentIndex = dataSource.length;
    let temporaryValue: any;
    let randomIndex: number;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = dataSource[currentIndex];
      dataSource[currentIndex] = dataSource[randomIndex];
      dataSource[randomIndex] = temporaryValue;
    }
    return dataSource;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  addPeriodic() {
    this.dialog.open(ExampleDialogComponent, {
      width: '40%',
    });
  }

  editPeriodic(element: any) {
    this.dialog.open(ExampleDialogComponent, {
      width: '40%',
      data: element,
    });
  }
}
