import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvivaComponent } from './viewviva.component';

describe('ViewvivaComponent', () => {
  let component: ViewvivaComponent;
  let fixture: ComponentFixture<ViewvivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
