import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SuperAdminComponent } from './superadmin/superadmin.component';
// import { AdminComponent } from './admin/admin.component';
// import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    { path: 'superman', component: SuperAdminComponent },
    { path: 'parent', component: ParentComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'admin', component: AdminComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
