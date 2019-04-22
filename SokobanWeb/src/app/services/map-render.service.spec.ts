import { TestBed } from '@angular/core/testing';

import { MapRenderService } from './map-render.service';

describe('MapRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapRenderService = TestBed.get(MapRenderService);
    expect(service).toBeTruthy();
  });
});
