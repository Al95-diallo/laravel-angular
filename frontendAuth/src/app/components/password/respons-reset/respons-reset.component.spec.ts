import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsResetComponent } from './respons-reset.component';

describe('ResponsResetComponent', () => {
  let component: ResponsResetComponent;
  let fixture: ComponentFixture<ResponsResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
