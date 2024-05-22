import { Component, OnInit } from '@angular/core';
import {MatCardContent, MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-page',
  imports: [MatCardModule, MatCardContent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/poster.png'
  };

  constructor() { }

  ngOnInit() { }
}