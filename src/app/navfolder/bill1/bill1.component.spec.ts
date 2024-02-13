import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bill1Component } from './bill1.component';

describe('Bill1Component', () => {
  let component: Bill1Component;
  let fixture: ComponentFixture<Bill1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bill1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bill1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
