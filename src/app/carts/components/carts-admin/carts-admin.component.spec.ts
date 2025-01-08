import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsAdminComponent } from './carts-admin.component';

describe('CartsAdminComponent', () => {
  let component: CartsAdminComponent;
  let fixture: ComponentFixture<CartsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
