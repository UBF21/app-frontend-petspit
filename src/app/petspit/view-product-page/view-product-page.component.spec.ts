import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductPageComponent } from './view-product-page.component';

describe('ViewProductPageComponent', () => {
  let component: ViewProductPageComponent;
  let fixture: ComponentFixture<ViewProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
