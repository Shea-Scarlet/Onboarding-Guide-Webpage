import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppOverviewComponent } from '../app-overview/app-overview.component';
import { AppFeaturesComponent } from '../app-features/app-features.component';
import { FooterComponent } from '../footer/footer.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-demo-website',
  standalone: true,
  imports: [
    AppHeaderComponent,
    AppOverviewComponent,
    AppFeaturesComponent,
    FooterComponent,
    TechStackComponent,
    RouterLink],
  templateUrl: './demo-website.component.html',
  styleUrl: './demo-website.component.scss'
})
export class DemoWebsiteComponent {

}
