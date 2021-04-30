import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductWelcomeComponent } from './products/product-welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    ProductWelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: productListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: ProductWelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
