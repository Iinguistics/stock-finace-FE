import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookModalComponent } from './outlook-modal.component';

describe('OutlookModalComponent', () => {
  let component: OutlookModalComponent;
  let fixture: ComponentFixture<OutlookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
