import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products-list.component';
import { ProductDepartmentComponent } from './products-department.component';
import { ProductImageComponent } from './products-image.component';
import { ProductPriceComponent } from './products-price.component';
import { ProductRowComponent } from './products-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
