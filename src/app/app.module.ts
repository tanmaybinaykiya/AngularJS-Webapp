// angular2
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// material2
import { MdIcon } from '@angular2-material/icon';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdSidenav } from '@angular2-material/sidenav';
import { MdTab, MdTabGroup } from '@angular2-material/tabs';
import { MdSpinner } from '@angular2-material/progress-circle';
import { MdSlideToggle } from '@angular2-material/slide-toggle';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { MdToolbarRow, MdToolbar } from '@angular2-material/toolbar';
import { MdCard, MdCardHeader, MdCardTitleGroup } from '@angular2-material/card';
import { MdListDivider, MdList, MdListAvatar, MdListItem } from '@angular2-material/list';
import { MdCardContent, MdCardTitle, MdCardSubtitle, MdCardActions } from '@angular2-material/card';

// other libs
import { MDLDirective } from './lib/mdl/MaterialDesignLiteUpgradeElement';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

// app services
import { APP_SERVICES } from './shared';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

// app components
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { ModalComponent } from './lib/modal/modal.component';
import { PeopleComponent } from './admin/people/people.component';
import { BillingComponent } from './admin/billing/billing.component';
import { ProfileComponent } from './parent/profile/profile.component';
import { AdminHeaderComponent } from './admin/header/header.component';
import { SuperAdminComponent } from './superadmin/superadmin.component';
import { ChildrenComponent } from './parent/children/children.component';
import { ParentHeaderComponent } from './parent/header/header.component';
import { AdminRegisterComponent } from './admin/register/register.component';
import { DropDownComponent } from './lib/custom-dropdown/dropdown.component';
import { JoinTodayComponent } from './login/join-today/join-today.component';
import { UnenrollComponent } from './parent/children/unenroll/unenroll.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { DeleteUserComponent } from './parent/profile/delete-user/delete-user.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { AdminHeaderUserBadgeComponent } from './admin/header/userBadge/user-badge.component';
import { ParentHeaderUserBadgeComponent } from './parent/header/userBadge/user-badge.component';
import { InviteFriendsComponent } from './parent/profile/invite-friends/invite-friends.component';
import { ResetPasswordComponent } from './parent/profile/reset-password/reset-password.component';
import { EnrollmentCenterComponent } from './admin/enrollment-center/enrollment-center.component';
import { EnrollStudentComponent } from './parent/children/enroll-student/enroll-student.component';
import { AddPaymentTypeComponent } from './parent/profile/add-payment-type/add-payment-type.component';
import { PayTuitionFeesComponent } from './parent/children/pay-tuition-fees/pay-tuition-fees.component';
import { ResendInvitationComponent } from './parent/profile/resend-invitation/resend-invitation.component';
import { DeletePaymentTypeComponent } from './parent/profile/delete-payment-type/delete-payment-type.component';
import { ManageUserProfileComponent } from './parent/profile/manage-user-profile/manage-user-profile.component';
import { ManageChildProfileComponent } from './parent/children/manage-child-profile/manage-child-profile.component';
import { DynamicFormQuestionComponent } from './lib/dynamic-form/dynamic-form-question/dynamic-form-question.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule, FormsModule,
        AppRoutes,
        HttpModule,
    ],
    declarations: [
        // All components go here

        // Library components
        MdIcon,
        MdInput,
        MdButton,
        MdSidenav,
        MdSpinner,
        MDLDirective,
        MdProgressBar,
        MdSlideToggle,
        MdTab, MdTabGroup,
        MdToolbarRow, MdToolbar,
        MdCard, MdCardHeader, MdCardTitleGroup,
        FileSelectDirective, FileDropDirective,
        MdListDivider, MdList, MdListAvatar, MdListItem,
        MdCardContent, MdCardTitle, MdCardSubtitle, MdCardActions,

        // App components
        AppComponent,
        LoginComponent,
        ModalComponent,
        AdminComponent,
        ParentComponent,
        PeopleComponent,
        BillingComponent,
        ProfileComponent,
        ChildrenComponent,
        DropDownComponent,
        UnenrollComponent,
        JoinTodayComponent,
        DeleteUserComponent,
        SuperAdminComponent,
        AdminHeaderComponent,
        ParentHeaderComponent,
        NotificationComponent,
        EnrollStudentComponent,
        ResetPasswordComponent,
        AdminRegisterComponent,
        InviteFriendsComponent,
        AddPaymentTypeComponent,
        AdministrationComponent,
        ForgotPasswordComponent,
        PayTuitionFeesComponent,
        ResendInvitationComponent,
        EnrollmentCenterComponent,
        ManageUserProfileComponent,
        DeletePaymentTypeComponent,
        ManageChildProfileComponent,
        DynamicFormQuestionComponent,
        AdminHeaderUserBadgeComponent,
        ParentHeaderUserBadgeComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        ...APP_SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
