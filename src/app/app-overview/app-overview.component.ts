import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  template: `
    <section class="overview-container">
      <div class="content-left">
        <div class="overview-texts">
          <h1>Create Dynamic Onboarding Guides for all your customers</h1>
          <p>
            Onboarding has never been easier! Create unique guides for each customer that fulfill
            all their specific needs in a seemless and dynamic experience thanks to our editor!
          </p>
          <button mat-flat-button color="primary" class="large-button" (click)="scrollToFeatures()">Learn More</button>
        </div>
      </div>
      <div class="content-right">
        <mat-card class="image-card">
          <img mat-card-image src="../../assets/images/WelcomeEd.png" alt="Empty" >
        </mat-card>
      </div>
    </section>
  `,
  styleUrls: ['../../styles.scss', './app-overview.component.scss']
})
export class AppOverviewComponent {
  scrollToFeatures() {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
