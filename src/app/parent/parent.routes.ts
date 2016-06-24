import { ChildrenComponent } from './children';
import { ProfileComponent } from './profile';
import { ParentComponent } from './parent.component';
import { ParentGuard } from '../security'
export const ParentRoutes = [
    {
        path: 'parent',
        component: ParentComponent,
        canActivate: [ParentGuard],
        children: [
            { path: '', redirectTo: 'children',terminal: true},
            { path: 'children', component: ChildrenComponent , name:'children'},
            { path: 'profile', component: ProfileComponent, name:'profile'}
        ]
    },

];