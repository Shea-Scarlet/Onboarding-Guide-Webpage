import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
  template: `
    <section class="overview-container">
      <div class="content-left">
        <div class="overview-texts">
          <h1>Create a Dynamic Onboarding Guide for Customers</h1>
          <p>
            Stop drowning in a backlog of requests to create, edit, and manage
            content. Adopt a better, simpler, and more custom component-driven
            approach to your angular application.
          </p>
          <button mat-flat-button color="primary" class="large-button" (click)="scrollToFeatures()">Learn More</button>
        </div>
      </div>
      <div class="content-right">
        <mat-card class="image-card">
          <img mat-card-image src="../../assets/images/OnboardingGuide.png" alt="Empty" >
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
