import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roupas } from './roupas';

describe('Roupas', () => {
  let component: Roupas;
  let fixture: ComponentFixture<Roupas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roupas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roupas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
