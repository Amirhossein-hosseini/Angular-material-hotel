import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabestComponent } from './tabest.component';

describe('TabestComponent', () => {
  let component: TabestComponent;
  let fixture: ComponentFixture<TabestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
