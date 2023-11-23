import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateProductDTO, Product } from '../../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(productDto: CreateProductDTO) {
    return this.http.post(`${this.apiUrl}/products/`, productDto);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${this.apiUrl}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}
