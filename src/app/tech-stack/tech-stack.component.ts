import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <section>
      <p>
        tech-stack works!
      </p>
    </section>
  `,
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

}
