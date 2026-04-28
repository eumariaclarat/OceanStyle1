import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biquinis } from './biquinis';

describe('Biquinis', () => {
  let component: Biquinis;
  let fixture: ComponentFixture<Biquinis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biquinis],
    }).compileComponents();

    fixture = TestBed.createComponent(Biquinis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
