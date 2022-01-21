import { TestBed } from '@angular/core/testing';

import { BankservService } from './bankserv.service';

describe('BankservService', () => {
  let service: BankservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
