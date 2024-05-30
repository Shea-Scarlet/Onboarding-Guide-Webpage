import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackCardComponent } from './tech-stack-card.component';

describe('TechStackCardComponent', () => {
  let component: TechStackCardComponent;
  let fixture: ComponentFixture<TechStackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
