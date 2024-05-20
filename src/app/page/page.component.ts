import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  //standalone: true,
  //imports: [],
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