import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/models/category.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = `${environment.API_URL}/categories`;

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(id: string) {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(this.apiUrl, data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, data);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
