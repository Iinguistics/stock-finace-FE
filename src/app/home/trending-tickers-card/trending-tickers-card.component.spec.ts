import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTickersCardComponent } from './trending-tickers-card.component';

describe('TrendingTickersCardComponent', () => {
  let component: TrendingTickersCardComponent;
  let fixture: ComponentFixture<TrendingTickersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTickersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTickersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
