import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPipe } from './pipes/filter/product.pipe';
import { ClickProductCardDirective } from './directives/click-product-card/click-product-card.directive';
import { CoreModule } from 'src/app/core/core.module';
import { CartModule } from '../cart/cart.module';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';


@NgModule({
  declarations: [
    ProductCardComponent, 
    ProductListComponent, 
    SaleDirective , 
    KdvPipe, 
    ProductPipe,
    ClickProductCardDirective,
    ProductFormComponent,
    AddProductComponent,
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    CartModule
  ],
  exports:[
    ProductListComponent, 
    ProductCardComponent
  ]
})
export class ProductsModule { }
