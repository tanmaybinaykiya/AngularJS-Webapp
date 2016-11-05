import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SuperAdminComponent } from './superadmin/superadmin.component';
import { LoginComponent } from './login/login.component';
import { AdminRoutes } from './admin/admin.routes';
import { ParentRoutes } from './parent/parent.routes';

export const routes: Routes = [
    ...AdminRoutes,
    ...ParentRoutes,
    { path: 'superman', component: SuperAdminComponent },
    { path: 'login', component: LoginComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
