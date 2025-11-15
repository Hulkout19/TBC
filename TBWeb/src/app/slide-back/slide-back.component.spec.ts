import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBackComponent } from './slide-back.component';

describe('SlideBackComponent', () => {
  let component: SlideBackComponent;
  let fixture: ComponentFixture<SlideBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideBackComponent]
    });
    fixture = TestBed.createComponent(SlideBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
