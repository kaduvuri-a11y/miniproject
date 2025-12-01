import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BankComponent } from './bank/bank.component';
import { BankDateilsComponent } from './bank-dateils/bank-dateils.component';

const routes: Routes = [
  { path: '', component: LoginComponent },    
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
   { path: 'product-details/:id', component: ProductDetailsComponent },
   { path: 'addproduct', component: AddProductComponent },
   { path: 'create-product', component:CreateProductComponent },
   { path: 'bank', component:BankComponent },
   
   { path:'bank-dateils/:id',component:BankDateilsComponent},
  

  

  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
