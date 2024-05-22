import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PageComponent } from './app/page/page.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

