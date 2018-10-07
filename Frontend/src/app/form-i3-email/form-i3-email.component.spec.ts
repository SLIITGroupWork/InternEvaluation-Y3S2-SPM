import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI3EmailComponent } from './form-i3-email.component';

describe('FormI3EmailComponent', () => {
  let component: FormI3EmailComponent;
  let fixture: ComponentFixture<FormI3EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI3EmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI3EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
