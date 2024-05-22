// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component'; // import AppComponent
import { PageComponent } from './page/page.component'; // import PageComponent
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent, // declare AppComponent
    PageComponent // declare PageComponent
    // other components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
    // other modules
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent] // bootstrap AppComponent
})
export class AppModule { }
