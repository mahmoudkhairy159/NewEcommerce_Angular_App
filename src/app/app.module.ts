
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SideOverlayComponent } from './admin/dashboard/side-overlay/side-overlay.component';
import { SidebarComponent } from './admin/dashboard/sidebar/sidebar.component';
import { PageHeaderComponent } from './admin/dashboard/page-header/page-header.component';
import { DashboardMainComponent } from './admin/dashboard/dashboard-main/dashboard-main.component';
import { DashboardFooterComponent } from './admin/dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardModalComponent } from './admin/dashboard/dashboard-modal/dashboard-modal.component';
import { ProductsComponent } from './admin/products/products.component';
import { ShowProductComponent } from './admin/products/show-product/show-product.component';
import { CreateProductComponent } from './admin/products/create-product/create-product.component';
import { UpdateProductComponent } from './admin/products/update-product/update-product.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { ShowBrandComponent } from './admin/brands/show-brand/show-brand.component';
import { CreateBrandComponent } from './admin/brands/create-brand/create-brand.component';
import { UpdateBrandComponent } from './admin/brands/update-brand/update-brand.component';
import { LoginComponent } from './login/login.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CustomersComponent } from './admin/customers/customers.component';
import { UpdateCustomerComponent } from './admin/customers/update-customer/update-customer.component';
import { CreateCustomerComponent } from './admin/customers/create-customer/create-customer.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './admin/profile/update-profile/update-profile.component';
import { ChangePasswordComponent } from './admin/profile/change-password/change-password.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { DataTablesModule } from 'angular-datatables';
import { ShowOrderComponent } from './admin/orders/show-order/show-order.component';
import { ShowCustomerComponent } from './admin/customers/show-customer/show-customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module ';
import { ShowCustomersComponent } from './admin/customers/show-customers/show-customers.component';
import { ShowBrandsComponent } from './admin/brands/show-brands/show-brands.component';
import { ShowProductsComponent } from './admin/products/show-products/show-products.component';
import { ShowOrdersComponent } from './admin/orders/show-orders/show-orders.component';
import { CreateOrderComponent } from './admin/orders/create-order/create-order.component';
import { UpdateOrderComponent } from './admin/orders/update-order/update-order.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './admin/profile/overview/overview.component';
import { AuthInterceptorService } from './admin/services/admin-auth/auth-interceptor.service';
import { ShoppingCartComponent } from './admin/customers/show-customer/shopping-cart/shopping-cart.component';
import { CustomerOrdersComponent } from './admin/customers/show-customer/customer-orders/customer-orders.component';
import { PersonalInformationComponent } from './admin/customers/show-customer/personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    SideOverlayComponent,
    SidebarComponent,
    PageHeaderComponent,
    PersonalInformationComponent,
    DashboardMainComponent,
    DashboardFooterComponent,
    DashboardModalComponent,
    ProductsComponent,
    ShowProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    BrandsComponent,
    ShowBrandComponent,
    CreateBrandComponent,
    UpdateBrandComponent,
    LoginComponent,
    ImageUploadComponent,
    CustomersComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
    OrdersComponent,
    ShowOrderComponent,
    ShowCustomerComponent,
    PageNotFoundComponent,
    ShowCustomersComponent,
    ShowBrandsComponent,
    ShowProductsComponent,
    ShowOrdersComponent,
    CreateOrderComponent,
    UpdateOrderComponent,
    OverviewComponent,
    ShoppingCartComponent,
    CustomerOrdersComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDropzoneModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
