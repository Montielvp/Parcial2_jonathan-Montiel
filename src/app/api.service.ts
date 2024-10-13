import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
