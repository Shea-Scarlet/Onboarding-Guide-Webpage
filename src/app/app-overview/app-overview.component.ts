import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './app-overview.component.html',
  styleUrl: './app-overview.component.scss'
})
export class AppOverviewComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 6, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 6, color: '#DDBDF1'},
    {text: 'Five', cols: 3, rows: 6, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 6, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 6, color: 'lightpink'},
    {text: 'Eigth', cols: 3, rows: 6, color: '#DDBDF1'},
  ];
}