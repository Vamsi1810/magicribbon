import { TestBed } from '@angular/core/testing';

import { HttpErrorMsgService } from './http-error-msg.service';

describe('HttpErrorMsgService', () => {
  let service: HttpErrorMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
