import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorMsgComponent } from './http-error-msg.component';

describe('HttpErrorMsgComponent', () => {
  let component: HttpErrorMsgComponent;
  let fixture: ComponentFixture<HttpErrorMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpErrorMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
