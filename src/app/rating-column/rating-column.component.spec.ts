import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingColumnComponent } from './rating-column.component';

describe('RatingColumnComponent', () => {
  let component: RatingColumnComponent;
  let fixture: ComponentFixture<RatingColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
