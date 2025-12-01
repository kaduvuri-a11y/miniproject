import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDateilsComponent } from './bank-dateils.component';

describe('BankDateilsComponent', () => {
  let component: BankDateilsComponent;
  let fixture: ComponentFixture<BankDateilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDateilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDateilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
