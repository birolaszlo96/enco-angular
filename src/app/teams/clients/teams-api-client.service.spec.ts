import { TestBed } from '@angular/core/testing';

import { TeamsApiClientService } from './teams-api-client.service';

describe('TeamsApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsApiClientService = TestBed.get(TeamsApiClientService);
    expect(service).toBeTruthy();
  });
});
