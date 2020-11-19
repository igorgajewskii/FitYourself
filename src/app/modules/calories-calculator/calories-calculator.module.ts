import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { caloriesCalculatorRouting } from './calories-calculator.routing';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PortionPipe } from 'src/app/shared/pipes/portion.pipe';
import { LoadingComponent } from 'src/app/shared/loading.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, PortionPipe, LoadingComponent],
  imports: [CommonModule, caloriesCalculatorRouting],
})
export class CaloriesCalculatorModule {}
