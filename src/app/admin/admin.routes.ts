import { AdminGuard } from '../security';
import { AdminComponent } from './admin.component';

import { PeopleComponent } from './people';
import { BillingComponent } from './billing';
import { ReportingComponent } from './reporting';
import { AdministrationComponent } from './administration';
import { EnrollmentCenterComponent } from './enrollment-center';
import { AdminRegisterComponent } from './register';

import { StaffComponent } from './administration/staff';
import { ClassComponent } from './administration/class';
import { SchoolComponent } from './administration/school';
import { GeneralComponent } from './administration/general';
import { StudentComponent } from './administration/student';
import { DiscountsComponent } from './administration/discounts';
import { NotificationComponent } from './administration/notification';

export const AdminRoutes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'enrollmentcenter', terminal: true },
            { path: 'register', component: AdminRegisterComponent },
            { path: 'enrollmentcenter', component: EnrollmentCenterComponent, name: 'enrollmentcenter', useAsDefault: true },
            { path: 'people', component: PeopleComponent },
            { path: 'billing', component: BillingComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'reporting', component: ReportingComponent },
            {
                path: 'administration',
                component: AdministrationComponent,
                children: [
                    { path: '', redirectTo: 'school', terminal: true },
                    { path: 'school', component: SchoolComponent, name: 'school' },
                    { path: 'class', component: ClassComponent },
                    { path: 'staff', component: StaffComponent },
                    { path: 'student', component: StudentComponent },
                    { path: 'discounts', component: DiscountsComponent },
                    { path: 'notification', component: NotificationComponent },
                    { path: 'general', component: GeneralComponent },
                ]
            },
        ]
    },

];
