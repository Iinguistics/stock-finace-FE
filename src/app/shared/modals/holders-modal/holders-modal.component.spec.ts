import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldersModalComponent } from './holders-modal.component';

describe('HoldersModalComponent', () => {
  let component: HoldersModalComponent;
  let fixture: ComponentFixture<HoldersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
