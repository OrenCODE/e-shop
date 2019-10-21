import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminProductsComponent } from "./components/admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./components/admin/admin-orders/admin-orders.component";
import { ProductFormComponent } from "./components/admin/product-form/product-form.component";

import { AuthGuard } from "./services/auth-guard.service";
import { AdminAuthGuard } from "./services/admin-auth-guard.service";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [ AuthGuard ] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [ AuthGuard ]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthGuard ] },

  { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGuard, AdminAuthGuard ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
