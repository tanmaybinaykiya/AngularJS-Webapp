import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SuperAdminComponent } from './superadmin';
import { PageNotFoundComponent } from './page-not-found';
import { AdminRoutes } from './admin/admin.routes';
import { ParentRoutes } from './parent/parent.routes';
import { SuperAdminGuard } from './security';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
    { path: 'superadmin', component: SuperAdminComponent, canActivate: [SuperAdminGuard] },
    ...AdminRoutes,
    ...ParentRoutes,
    { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
