import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
})
export class Example2Component {}
