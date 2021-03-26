import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CardItemComponent } from './cards-requests/card-item/card-item.component';
import { CardListComponent } from './cards-requests/card-list/card-list.component';
import { RequestListComponent } from './cards-requests/order/request-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ProfileComponent } from './profile/profile.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { DashboardComponent } from './cards-requests/dashboard/dashboard.component';
import { CartContainerComponent } from './cart/cart-container/cart-container.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CartOrderSummaryComponent } from './cart/cart-order-summary/cart-order-summary.component';
import { QuantityInputComponent } from './cart/cart-detail/quantity-input/quantity-input.component';
import { AccountCommonInfoComponent } from './account/account-common-info/account-common-info.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { OrderDetailComponent } from './cards-requests/order-detail/order-detail.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    TopMenuComponent,
    CardItemComponent,
    CardListComponent,
    RequestListComponent,
    ProfileComponent,
    RegisterReactiveFormComponent,
    DashboardComponent,
    CartContainerComponent,
    CartListComponent,
    CartDetailComponent,
    CartOrderSummaryComponent,
    QuantityInputComponent,
    AccountCommonInfoComponent,
    RegisterFormComponent,
    OrderDetailComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzPopconfirmModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
