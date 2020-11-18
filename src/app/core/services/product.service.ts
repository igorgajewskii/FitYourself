import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { PRODUCTS } from '../mocks/PRODUCTS';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(PRODUCTS.find((p) => p.id === id));
  }
}
