import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TechStackCardComponent } from '../tech-stack-card/tech-stack-card.component';
import {
  FRONT_END_TITLE,
  FRONT_END_SUBTEXT,
  TEST_VISUALIZATION_TITLE,
  TEST_VISUALIZATION_SUBTEXT,
  LINTER_FORMATTER_TITLE,
  LINTER_FORMATTER_SUBTEXT,
  DESIGN_TITLE,
  DESIGN_SUBTEXT
} from '../../constants/tech-stack';


@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TechStackCardComponent],
  template: `
    <section class="tech-stack-container">
      <div class="content-header">
        <h1>Stop hard-coding Angular App</h1>
        <p>Register the code components you already use to Builder.io, then drag-and-drop them into place.</p>
      </div>
      <div class="content-body">
        <div class="body-top">
          <app-tech-stack-card
            class="card-container"
            [logos]="frontEndLogos"
            [cardContentTitle]="frontEndTitle"
            [cardContentSubText]="frontEndSubtext"
          />
          <app-tech-stack-card
            class="card-container"
            [logos]="testVisualizationLogos"
            [cardContentTitle]="testVisualizationTitle"
            [cardContentSubText]="testVisualizationSubtext"
          />
        </div>
        <div class="body-bottom">
          <app-tech-stack-card
            class="card-container"
            [logos]="linterFormatterLogos"
            [cardContentTitle]="linterFormatterTitle"
            [cardContentSubText]="linterFormatterSubtext"
          />
          <app-tech-stack-card
            class="card-container"
            [logos]="designLogos"
            [cardContentTitle]="designTitle"
            [cardContentSubText]="designSubtext"
          />
        </div>
      </div>
    </section>
  `,
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  frontEndLogos = ["AngularTS", "MaterialDesign"];
  frontEndTitle = FRONT_END_TITLE;
  frontEndSubtext = FRONT_END_SUBTEXT;
  testVisualizationLogos = ["Storybook"];
  testVisualizationTitle = TEST_VISUALIZATION_TITLE;
  testVisualizationSubtext = TEST_VISUALIZATION_SUBTEXT;
  linterFormatterLogos = ["Prettier", "ESLint"];
  linterFormatterTitle = LINTER_FORMATTER_TITLE;
  linterFormatterSubtext = LINTER_FORMATTER_SUBTEXT;
  designLogos = ["Figma"];
  designTitle = DESIGN_TITLE;
  designSubtext = DESIGN_SUBTEXT;
}
