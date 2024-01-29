import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSheduledComponent } from './view-sheduled.component';

describe('ViewSheduledComponent', () => {
  let component: ViewSheduledComponent;
  let fixture: ComponentFixture<ViewSheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSheduledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
