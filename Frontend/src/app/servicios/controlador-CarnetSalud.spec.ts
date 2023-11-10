import { TestBed } from '@angular/core/testing';

import { ControladorCarnetSalud } from './controlador-CarnetSalud';

describe('ControladorCarnetSalud', () => {
  let service: ControladorCarnetSalud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorCarnetSalud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
