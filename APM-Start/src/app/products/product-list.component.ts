import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {


  constructor(private productService: ProductService) { }


  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$ = this.productService.products$
  .pipe(
    map(products => 
      products.map(product => ({
        // spread operator, copy the objects keys and values
        ...product, 
        price : product.price * 2.5,
        searchKey : [product.productName]
      }) as Product),

      catchError( err => {
        this.errorMessage = err ;
        return EMPTY;
      })
    ));


  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
