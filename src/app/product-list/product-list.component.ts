import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.apiService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  getCategories() {
    this.apiService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  filterProducts(category: string) {
    this.apiService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    });
  }
}
