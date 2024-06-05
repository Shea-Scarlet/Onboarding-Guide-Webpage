import { Component } from '@angular/core';
import { DemoWebsiteComponent } from './demo-website/demo-website.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DemoWebsiteComponent, RouterOutlet, RouterLink],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
