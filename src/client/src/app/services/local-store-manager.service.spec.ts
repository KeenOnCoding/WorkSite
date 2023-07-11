import { TestBed } from '@angular/core/testing';

import { LocalStoreManager } from './local-store-manager.service';

describe('LocalStoreManager', () => {
  let service: LocalStoreManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
