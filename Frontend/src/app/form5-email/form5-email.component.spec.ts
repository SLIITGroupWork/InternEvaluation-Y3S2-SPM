import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form5EmailComponent } from './form5-email.component';

describe('Form5EmailComponent', () => {
  let component: Form5EmailComponent;
  let fixture: ComponentFixture<Form5EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form5EmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form5EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
