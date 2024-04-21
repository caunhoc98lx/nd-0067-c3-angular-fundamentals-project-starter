import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { SuccessViewComponent } from './pages/success-view/success-view.component';

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
        path:'products',
        component:ProductListComponent
    },
    {
        path:'products/:id',
        component:ProductCardComponent
    },
    {
        path:'cart-view',
        component:CartViewComponent
    },
    {
        path:'success-view',
        component: SuccessViewComponent
    }
];
