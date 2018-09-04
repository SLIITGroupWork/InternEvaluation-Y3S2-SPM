import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternReportComponent } from './intern-report.component';

describe('InternReportComponent', () => {
  let component: InternReportComponent;
  let fixture: ComponentFixture<InternReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
