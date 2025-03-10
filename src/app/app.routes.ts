import { Routes } from '@angular/router';
import { MasterMainContentComponentComponent } from './masterContentComponent/master-main-content-component/master-main-content-component.component';
import { LandingComponent } from './landinComponent/landing/landing.component';
import { ErrorComponent } from './errorComponent/error/error.component';
import { ProductDetailsComponent } from './productdetails/product-details/product-details.component';
import { FormsComponent } from './formsComponent/forms/forms.component';

export const routes: Routes = [
    {path:"",component:LandingComponent},
    {path:"products",component:MasterMainContentComponentComponent},
    {path:"products/:id",component:ProductDetailsComponent},
    {path:"addproduct",component:FormsComponent},
    {path:"**",component:ErrorComponent},
];
