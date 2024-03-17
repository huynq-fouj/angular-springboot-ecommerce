import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessErrorComponent } from './access-error.component';

describe('AccessErrorComponent', () => {
  let component: AccessErrorComponent;
  let fixture: ComponentFixture<AccessErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
