import { TestBed } from '@angular/core/testing';

import { ToolbarHeaderService } from './toolbar-header.service';

describe('ToolbarHeaderService', () => {
  let service: ToolbarHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
