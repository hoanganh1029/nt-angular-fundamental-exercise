import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCommonInfoComponent } from './account/account-common-info/account-common-info.component';
import { DashboardComponent } from './cards-requests/dashboard/dashboard.component';
import { OrderDetailComponent } from './cards-requests/order-detail/order-detail.component';
import { CartContainerComponent } from './cart/cart-container/cart-container.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'register-reactive', component: RegisterReactiveFormComponent },
  { path: 'register-driven', component: RegisterFormComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'account', component: AccountCommonInfoComponent },
  { path: 'profile/:id', component: EditProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
