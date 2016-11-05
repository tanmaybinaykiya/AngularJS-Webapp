import { ChildrenComponent } from './children';
import { ProfileComponent } from './profile';
import { ParentComponent } from './parent.component';
import { ParentGuard } from '../security';

export const ParentRoutes = [
    {
        path: 'parent',
        component: ParentComponent,
        // canActivate: [ParentGuard],
        children: [
            { path: '', redirectTo: 'students', terminal: true },
            { path: 'students', component: ChildrenComponent, name: 'students' },
            // { path: 'profile', component: ProfileComponent, name: 'profile' }
        ]
    },

];
