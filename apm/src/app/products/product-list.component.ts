import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector : 'pm-products',
    templateUrl:'./produt-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class productListComponent implements OnInit,OnDestroy {
    
    constructor (private productService : ProductService) {}
    
    pageTitle : string = "Product List"
    imageWidth : number = 75;
    imageMargin: number = 2
    showImage : boolean = true
    products : IProduct[] = []
    filteredProducts : IProduct[] = [];

    errorMessage : string = '';

    private _listFilter : string = '';

    sub! : Subscription;

    get listFilter(): string {
        return this._listFilter
    }

    set listFilter(value: string) {
        this._listFilter = value ;
        console.log('In setter:', value)
        this.filteredProducts = this.performFilter(value)
    }

    performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLowerCase();
    return this.products.filter((product:IProduct) =>
        product.productName.toLowerCase().includes(filterBy)
    )
    }

      ngOnInit():void {
          console.log("on init");
          this._listFilter = "";
          this.productService.getProducts().subscribe({
              next: products => {
                  this.products = products;
                  this.filteredProducts = this.products;
              },
              error: err => this.errorMessage = err
          });
      }

      ngOnDestroy(): void {
          this.sub.unsubscribe()
      }

      toggleImage() : void {
          this.showImage =! this.showImage;
      }

      onRatingClicked(message:string): void {
          console.log(message);
          this.pageTitle = message;
      }
}