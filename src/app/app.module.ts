import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { HeaderComponent } from './website/components/header/header.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { HomeComponent } from './website/pages/home/home.component';
import { MyOderComponent } from './website/pages/my-oder/my-oder.component';

import { MaterialModule } from './material/material.module';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyOderComponent,
    BannerComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
