import { RouterModule, Routes } from '@angular/router';
import { AppOverviewComponent } from './app-overview/app-overview.component';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { StorybookComponent } from './storybook/storybook.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'overview', component: AppOverviewComponent },
  { path: 'features', component: AppFeaturesComponent },
  { path: 'storybook', component: StorybookComponent },
  { path: 'tech-stack', component: TechStackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
