import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', 
		loadComponent: () => import('./routes/dashboard/dashboard.component'),
		children: [
			{ path: 'products', loadComponent: () => import('./routes/products/products.component') },
			{ path: 'sales-flow', loadComponent: () => import('./routes/sales-flow/sales-flow.component') },
			{ path: 'shops', loadComponent: () => import('./routes/shops/shops.component') },
    ] 
  },
	{ path: 'login', loadComponent: () => import('./routes/login/login.component') },
	{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
