import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', 
		children: [
			{ path: '', loadComponent: () => import('./routes/dashboard/dashboard.component') },
			{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ] 
  },
	{ path: 'login', loadComponent: () => import('./routes/login/login.component') },
	{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
