import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIStudentComponent } from './form-i-student.component';

describe('FormIStudentComponent', () => {
  let component: FormIStudentComponent;
  let fixture: ComponentFixture<FormIStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
