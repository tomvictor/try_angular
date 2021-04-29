import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe'


@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
