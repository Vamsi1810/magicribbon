import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincompletedordersComponent } from './admincompletedorders.component';

describe('AdmincompletedordersComponent', () => {
  let component: AdmincompletedordersComponent;
  let fixture: ComponentFixture<AdmincompletedordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincompletedordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincompletedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
