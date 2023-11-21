import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormComponent } from './cs-form.component';

describe('CsFormComponent', () => {
  let component: CsFormComponent;
  let fixture: ComponentFixture<CsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsFormComponent]
    });
    fixture = TestBed.createComponent(CsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
