import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cw5Component } from './cw5.component';

describe('Cw5Component', () => {
  let component: Cw5Component;
  let fixture: ComponentFixture<Cw5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cw5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cw5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
