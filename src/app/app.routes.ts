import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnboardingGuideComponent } from './onboarding-guide/onboarding-guide.component';
import { DemoWebsiteComponent } from './demo-website/demo-website.component';
import { AppOverviewComponent } from './app-overview/app-overview.component';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { StorybookComponent } from './storybook/storybook.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

export const routes: Routes = [
  { path: 'home', component: DemoWebsiteComponent},
  { path: 'overview', component: AppOverviewComponent },
  { path: 'features', component: AppFeaturesComponent },
  { path: 'storybook', component: StorybookComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'OnboardingGuide', component: OnboardingGuideComponent },
  { path: '**', component: DemoWebsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
