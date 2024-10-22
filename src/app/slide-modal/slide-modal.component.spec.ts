import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideModalComponent } from './slide-modal.component';

describe('SlideModalComponent', () => {
  let component: SlideModalComponent;
  let fixture: ComponentFixture<SlideModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
