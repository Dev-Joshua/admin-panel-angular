import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
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
}
