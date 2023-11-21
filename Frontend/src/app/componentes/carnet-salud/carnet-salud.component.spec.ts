import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetSaludComponent } from './carnet-salud.component';

describe('CarnetSaludComponent', () => {
  let component: CarnetSaludComponent;
  let fixture: ComponentFixture<CarnetSaludComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarnetSaludComponent]
    });
    fixture = TestBed.createComponent(CarnetSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
