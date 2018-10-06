import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IRStepsComponent } from './i-r-steps.component';

describe('IRStepsComponent', () => {
  let component: IRStepsComponent;
  let fixture: ComponentFixture<IRStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IRStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IRStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
