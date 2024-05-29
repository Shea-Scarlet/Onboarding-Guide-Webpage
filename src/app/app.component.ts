import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppOverviewComponent } from './app-overview/app-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, AppOverviewComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
