import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login';
import { SuperAdminComponent } from './superadmin';
import { DropDownComponent } from './lib/custom-dropdown/dropdown.component';
import { AdminRoutes } from './admin/admin.routes';
import { ParentRoutes } from './parent/parent.routes';
import { SuperAdminGuard } from './security';

const routes: Routes = [
    ...AdminRoutes,
    ...ParentRoutes,
    {
        path: '',
        redirectTo: '/login',
    },
    {
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'superadmin',
        component: SuperAdminComponent,
        canActivate: [SuperAdminGuard],
    }, {
        path: 'test',
        component: DropDownComponent,
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
