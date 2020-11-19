import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { delay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public product$: Observable<Product | undefined>;

  constructor(public productService: ProductService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      delay(500),
      switchMap((params: ParamMap) => {
        let id = params.get('id');
        return this.productService.getProduct(+id!);
      })
    );
  }
}
