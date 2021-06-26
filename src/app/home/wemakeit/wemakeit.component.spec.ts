import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WemakeitComponent } from './wemakeit.component';

describe('WemakeitComponent', () => {
  let component: WemakeitComponent;
  let fixture: ComponentFixture<WemakeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WemakeitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WemakeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
