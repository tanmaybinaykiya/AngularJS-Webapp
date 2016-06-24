import { provideRouter }       from '@angular/router';
import { LoginComponent } from './login';
import { SuperAdminComponent } from './superadmin';
import { AdminRoutes } from './admin/admin.routes';
import { ParentRoutes } from './parent/parent.routes';
import { SuperAdminGuard } from './security'
export const SchoolAppRoutes = [
     ...AdminRoutes,
     ...ParentRoutes,
     {
        path: '',
        redirectTo: '/login',
        terminal: true
     },
    {
        path: 'login',
        component: LoginComponent,
        name: 'Login',
        useAsDefault: true
    }, {
        path: 'superadmin',
        component: SuperAdminComponent,
        canActivate: [SuperAdminGuard],
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(SchoolAppRoutes)
];