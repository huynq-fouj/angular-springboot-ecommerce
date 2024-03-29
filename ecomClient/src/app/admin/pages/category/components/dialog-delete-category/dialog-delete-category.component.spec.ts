import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteCategoryComponent } from './dialog-delete-category.component';

describe('DialogDeleteCategoryComponent', () => {
  let component: DialogDeleteCategoryComponent;
  let fixture: ComponentFixture<DialogDeleteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
