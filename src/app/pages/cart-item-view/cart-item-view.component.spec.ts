import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemViewComponent } from './cart-item-view.component';

describe('CartItemViewComponent', () => {
  let component: CartItemViewComponent;
  let fixture: ComponentFixture<CartItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
