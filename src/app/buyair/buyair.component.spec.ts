import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyairComponent } from './buyair.component';

describe('BuyairComponent', () => {
  let component: BuyairComponent;
  let fixture: ComponentFixture<BuyairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
