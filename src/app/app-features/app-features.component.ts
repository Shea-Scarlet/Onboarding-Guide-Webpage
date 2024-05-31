import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
}
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './app-features.component.html',
  styleUrl: './app-features.component.scss',
})
export class AppFeaturesComponent {
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/asurion.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/GIGAOM.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/IDC.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/Gartner.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/Forrester.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/BlackRock.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/Nestle.png'},
    {text: '', cols: 1, rows: 1, color: 'white', imageUrl: '../../assets/images/HYATT.png'},
  ];
}
