import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface LogoTypes {
  name: "Material_Design" | "AngularTS";
}

@Component({
  selector: 'app-tech-stack-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  template: `
    <mat-card class="card">
      <mat-card-header style="padding: 0px;">
        <mat-card-title-group style="align-items: center;">
          <ng-container *ngFor="let logo of logos; let i = index">
            <ng-container [ngSwitch]="logo">
              <img mat-card-lg-image src="../../assets/images/AngularTS_Logo.png" alt="empty" *ngSwitchCase="'AngularTS'" style="height: 80px;">
              <img mat-card-sm-image src="../../assets/images/Google_Material_Design_Logo.png" alt="empty" *ngSwitchCase="'MaterialDesign'">
              <img mat-card-xl-image src="../../assets/images/Storybook_Logo.png" alt="empty" *ngSwitchCase="'Storybook'" style="height: 80px;">
              <img mat-card-sm-image src="../../assets/images/Prettier_Logo.png" alt="empty" *ngSwitchCase="'Prettier'">
              <img mat-card-sm-image src="../../assets/images/ESLint_Logo.png" alt="empty" *ngSwitchCase="'ESLint'">
              <img mat-card-xl-image src="../../assets/svgs/Figma_Logo.svg" alt="empty" *ngSwitchCase="'Figma'" style="height: 80px;">
            </ng-container>
          </ng-container>
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content class="card-content">
        <h2 style="margin: 0px;">{{ cardContentTitle }}</h2>
        <p>{{ cardContentSubText }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './tech-stack-card.component.scss'
})
export class TechStackCardComponent {
  @Input() logos!: string[];
  @Input() cardContentTitle!: string;
  @Input() cardContentSubText!: string;
}
