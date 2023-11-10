import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './website/pages/home/home.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { MyOderComponent } from './website/pages/my-oder/my-oder.component';
import { LoginComponent } from './website/pages/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { ProfileComponent } from './website/pages/profile/profile.component';

import { adminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'my-order',
        component: MyOderComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
