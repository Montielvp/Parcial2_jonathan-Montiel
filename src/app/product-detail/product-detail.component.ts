import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getProductById(+id!).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Producto añadido al carrito!');
  }

}








