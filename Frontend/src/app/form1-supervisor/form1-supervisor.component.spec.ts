import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1SupervisorComponent } from './form1-supervisor.component';

describe('Form1SupervisorComponent', () => {
  let component: Form1SupervisorComponent;
  let fixture: ComponentFixture<Form1SupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1SupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1SupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
