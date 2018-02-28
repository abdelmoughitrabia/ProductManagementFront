import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/productService";
import {ProductsListComponent} from './products-list/products-list.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboradComponent} from './dashborad/dashborad.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {RemoveProductComponent} from './remove-product/remove-product.component';
import {CreateProductPrimeComponent} from './primeNG/create-product-prime/create-product-prime.component';
import {DashboardPrimeComponent} from './primeNG/dashboard-prime/dashboard-prime.component';
import {ProductListPrimeComponent} from './primeNG/product-list-prime/product-list-prime.component';
import {EditProductPrimeComponent} from './primeNG/edit-product-prime/edit-product-prime.component';
import {NavPrimeComponent} from './primeNG/nav-prime/nav-prime.component';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule, MessagesModule} from "primeng/primeng";
import {MessageModule} from "primeng/message";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ChartModule} from "primeng/chart";
import {GrowlModule} from "primeng/growl";


const routes: Routes = [
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'prime/addProduct', component: CreateProductPrimeComponent},
  {path: 'editProduct/:id', component: EditProductComponent},
  {path: 'prime/editProduct/:id', component: EditProductPrimeComponent},
  {path: 'productList', component: ProductsListComponent},
  {path: 'prime/productList', component: ProductListPrimeComponent},
  {path: 'dashboard', component: DashboradComponent},
  {path: 'prime/dashboard', component: DashboardPrimeComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductsListComponent,
    NavComponent,
    DashboradComponent,
    EditProductComponent,
    RemoveProductComponent,
    CreateProductPrimeComponent,
    DashboardPrimeComponent,
    ProductListPrimeComponent,
    EditProductPrimeComponent,
    NavPrimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    InputTextModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ChartModule,
    GrowlModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
