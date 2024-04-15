import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:ProductListComponent
    },
    {
        path:'checkout/:id',
        component:CheckoutComponent
    },
    {
        path:'products',
        component:ProductListComponent
    },
    {
        path:'products/:id',
        component:ProductCardComponent
    }
];
