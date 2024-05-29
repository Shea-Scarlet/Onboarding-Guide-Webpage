import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosBarComponent } from './logos-bar.component';

describe('LogosBarComponent', () => {
  let component: LogosBarComponent;
  let fixture: ComponentFixture<LogosBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogosBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
