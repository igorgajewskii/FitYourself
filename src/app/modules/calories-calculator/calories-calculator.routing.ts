import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

export const caloriesCalculatorRoutes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
];

export const caloriesCalculatorRouting = RouterModule.forChild(
  caloriesCalculatorRoutes
);
