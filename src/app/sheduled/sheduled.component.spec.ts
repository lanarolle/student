import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledComponent } from './sheduled.component';

describe('SheduledComponent', () => {
  let component: SheduledComponent;
  let fixture: ComponentFixture<SheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SheduledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
