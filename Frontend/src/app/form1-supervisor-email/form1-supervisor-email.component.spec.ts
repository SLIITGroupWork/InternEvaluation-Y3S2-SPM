import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1SupervisorEmailComponent } from './form1-supervisor-email.component';

describe('Form1SupervisorEmailComponent', () => {
  let component: Form1SupervisorEmailComponent;
  let fixture: ComponentFixture<Form1SupervisorEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1SupervisorEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1SupervisorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
