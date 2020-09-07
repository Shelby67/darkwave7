import { TestBed } from '@angular/core/testing';

import { EmailcheckService } from './emailcheck.service';

describe('EmailcheckService', () => {
  let service: EmailcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
