import { Routes } from '@angular/router';
import { userGuard } from './Guards/user.guard';
import { adminGuard } from './Guards/admin.guard';

export const routes: Routes = [
    {path:"",loadComponent:()=>import('../app/login/login.component').then(m=>m.LoginComponent),pathMatch:'full'},
    {path:"Landing",loadComponent:()=>import('../app/landinComponent/landing/landing.component').then(m=>m.LandingComponent),pathMatch:'full'},
    {path:"products",loadComponent:()=>import('../app/masterContentComponent/master-main-content-component/master-main-content-component.component').then(m=>m.MasterMainContentComponentComponent),canActivate:[userGuard]},
    {path:"products/:id",loadComponent:()=>import('../app/productdetails/product-details/product-details.component').then(m=>m.ProductDetailsComponent),canActivate:[userGuard]},
    {path:"addproduct",loadComponent:()=>import('../app/formsComponent/forms/forms.component').then(m=>m.FormsComponent),canActivate:[userGuard,adminGuard]},
    {path:"addproduct/:id",loadComponent:()=>import('../app/formsComponent/forms/forms.component').then(m=>m.FormsComponent),canActivate:[userGuard,adminGuard]},
    {path:"SignUp",loadComponent:()=>import('../app/sign-up/sign-up.component').then(m=>m.SignUpComponent),pathMatch:'full'},
    {path:"SignUp/:id",loadComponent:()=>import('../app/sign-up/sign-up.component').then(m=>m.SignUpComponent),pathMatch:'full'},
    {path:"Dashboard",loadComponent:()=>import('../app/dashboard/dashboard.component').then(m=>m.DashboardComponent),canActivate:[adminGuard,userGuard]},
    {path:"orders",loadComponent:()=>import('../app/orders/orders.component').then(m=>m.OrdersComponent)},
    {path:"profile",loadComponent:()=>import('../app/userprofile/userprofile.component').then(m=>m.UserprofileComponent)},
    {path:"**",loadComponent:()=>import('../app/errorComponent/error/error.component').then(m=>m.ErrorComponent)},
];