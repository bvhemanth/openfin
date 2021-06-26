import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostbusinessComponent } from './boostbusiness.component';

describe('BoostbusinessComponent', () => {
  let component: BoostbusinessComponent;
  let fixture: ComponentFixture<BoostbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
