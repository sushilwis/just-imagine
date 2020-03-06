import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../product/products/products.component';
import { ProductdetailsComponent } from '../product/productdetails/productdetails.component';
import { ProductlistComponent } from '../product/productlist/productlist.component';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  { 
    path: 'products', 
    component: ProductsComponent 
  },
  { 
    path: 'productdetails', 
    component: ProductdetailsComponent 
  },  
  { 
    path: 'productsvri', 
    component:  ProductlistComponent 
  }
];

@NgModule({
  declarations: [
    ProductsComponent, 
    ProductdetailsComponent, 
    ProductlistComponent
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
