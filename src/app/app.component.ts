import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PageComponent } from './page/page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, PageComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
