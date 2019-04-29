import { TestBed } from '@angular/core/testing';

import { GameElementService } from './game-element.service';

describe('GameElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameElementService = TestBed.get(GameElementService);
    expect(service).toBeTruthy();
  });
});
