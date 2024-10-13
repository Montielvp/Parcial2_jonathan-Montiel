import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const cartData = localStorage.getItem('cart');
    this.cart = cartData ? JSON.parse(cartData) : [];
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.saveCart();
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getTotalItems(): number {
    return this.cart.length;
  }
}
