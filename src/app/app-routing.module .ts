import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { UpdateBrandComponent } from './admin/brands/update-brand/update-brand.component';
import { ChangePasswordComponent } from './admin/profile/change-password/change-password.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { UpdateProfileComponent } from './admin/profile/update-profile/update-profile.component';
import { CreateBrandComponent } from './admin/brands/create-brand/create-brand.component';
import { ShowBrandComponent } from './admin/brands/show-brand/show-brand.component';
import { ProductsComponent } from './admin/products/products.component';
import { CreateProductComponent } from './admin/products/create-product/create-product.component';
import { UpdateProductComponent } from './admin/products/update-product/update-product.component';
import { ShowProductComponent } from './admin/products/show-product/show-product.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { UpdateCustomerComponent } from './admin/customers/update-customer/update-customer.component';
import { ShowCustomerComponent } from './admin/customers/show-customer/show-customer.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ShowOrderComponent } from './admin/orders/show-order/show-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardMainComponent } from './admin/dashboard/dashboard-main/dashboard-main.component';
import { CreateCustomerComponent } from './admin/customers/create-customer/create-customer.component';
import { ShowCustomersComponent } from './admin/customers/show-customers/show-customers.component';
import { ShowBrandsComponent } from './admin/brands/show-brands/show-brands.component';
import { ShowProductsComponent } from './admin/products/show-products/show-products.component';
import { ShowOrdersComponent } from './admin/orders/show-orders/show-orders.component';
import { CreateOrderComponent } from './admin/orders/create-order/create-order.component';
import { UpdateOrderComponent } from './admin/orders/update-order/update-order.component';
import { PersonalInformationComponent } from './admin/customers/show-customer/personal-information/personal-information.component';
import { AdminAuthGuard } from './admin/services/admin-auth/admin-auth.guard';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './admin/profile/overview/overview.component';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './admin/customers/show-customer/shopping-cart/shopping-cart.component';
import { CustomerOrdersComponent } from './admin/customers/show-customer/customer-orders/customer-orders.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgetPassword', component: ForgetPasswordComponent },

      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard], children: [
          {
            path: 'profile', component: ProfileComponent, children: [
              { path: 'update/:id', component: UpdateProfileComponent },
              { path: 'changePassword/:id', component: ChangePasswordComponent },
              { path: ':id', component: OverviewComponent },

            ]
          },
          {
            path: 'brands', component: BrandsComponent, children: [
              { path: 'create', component: CreateBrandComponent },
              { path: 'update/:id/:data', component: UpdateBrandComponent },
              { path: 'show/:id', component: ShowBrandComponent },
              { path: '', component: ShowBrandsComponent },

            ]
          },
          {
            path: 'products', component: ProductsComponent, children: [
              { path: 'create', component: CreateProductComponent },
              { path: 'update/:id', component: UpdateProductComponent },
              { path: 'show/:id', component: ShowProductComponent },
              { path: '', component: ShowProductsComponent },

            ]
          },
          {
            path: 'users', component: CustomersComponent, children: [
              { path: 'create', component: CreateCustomerComponent },
              { path: 'update/:id/:data', component: UpdateCustomerComponent },
              {
                path: 'show/:id', component: ShowCustomerComponent, children: [
                  { path: '', component: PersonalInformationComponent },
                  { path: 'shoppingCart', component: ShoppingCartComponent },
                  { path: 'orders', component: CustomerOrdersComponent },
                  { path: 'update/:data', component:UpdateCustomerComponent  },

                ]
              },
              { path: '', component: ShowCustomersComponent },

            ]
          },
          {
            path: 'orders', component: OrdersComponent, children: [
              { path: 'create', component: CreateOrderComponent },
              { path: 'update/:id', component: UpdateOrderComponent },
              { path: 'show/:id', component: ShowOrderComponent },
              { path: '', component: ShowOrdersComponent },

            ]
          },
          { path: '', component: DashboardMainComponent },


        ]
      },

      { path: '', component: LoginComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
