
// angular2
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// material2
import { MdTabsModule } from '@angular2-material/tabs';
import { MdIconModule } from '@angular2-material/icon';
import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';

// primeng
import {
    ButtonModule,
    DialogModule,
    CheckboxModule,
    PasswordModule,
    DataGridModule,
    DropdownModule,
    InputTextModule,
    DataTableModule,
    MultiSelectModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    ConfirmationService,
} from './lib/primeng/primeng';

// other libs
import { MDLDirective } from './lib/mdl/MaterialDesignLiteUpgradeElement';
import { FileUploadModule } from 'ng2-file-upload';
import { CookieService } from 'angular2-cookie/core';

// app services
import {
    NotificationService,
    ParentService,
    ApiUrlService,
    SchoolService,
    RecipientService,
    InstitutionService
} from './shared';
import { LoginService } from './shared/login.service';
import { StudentService } from './shared/student.service';
import { QuestionControlService } from './lib/question-control.service';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

// app components
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found';

import { ParentComponent } from './parent/parent.component';
import { ModalComponent } from './lib/modal/modal.component';
import { ProfileComponent } from './parent/profile/profile.component';
import { SuperAdminComponent } from './superadmin/superadmin.component';
import { ChildrenComponent } from './parent/children/children.component';
import { ParentHeaderComponent } from './parent/header/header.component';
import { DropDownComponent } from './lib/custom-dropdown/dropdown.component';
import { UnenrollComponent } from './parent/children/unenroll/unenroll.component';
import { DeleteUserComponent } from './parent/profile/delete-user/delete-user.component';
import { ParentHeaderUserBadgeComponent } from './parent/header/userBadge/user-badge.component';
import { InviteFriendsComponent } from './parent/profile/invite-friends/invite-friends.component';
import { ResetPasswordComponent } from './parent/profile/reset-password/reset-password.component';
import { EnrollStudentComponent } from './parent/children/enroll-student/enroll-student.component';
import { AddPaymentTypeComponent } from './parent/profile/add-payment-type/add-payment-type.component';
import { PayTuitionFeesComponent } from './parent/children/pay-tuition-fees/pay-tuition-fees.component';
import { ResendInvitationComponent } from './parent/profile/resend-invitation/resend-invitation.component';
import { DeletePaymentTypeComponent } from './parent/profile/delete-payment-type/delete-payment-type.component';
import { ManageUserProfileComponent } from './parent/profile/manage-user-profile/manage-user-profile.component';
import { ManageChildProfileComponent } from './parent/children/manage-child-profile/manage-child-profile.component';
import { DynamicFormQuestionComponent } from './lib/dynamic-form/dynamic-form-question/dynamic-form-question.component';

import { AdminComponent } from './admin';
import { PeopleComponent } from './admin/people';
import { BillingComponent } from './admin/billing';
import { AdminHeaderComponent } from './admin/header';
import { ReportingComponent } from './admin/reporting';
import { AdminRegisterComponent } from './admin/register';
import { NotificationComponent } from './admin/notification';
import { AdministrationComponent } from './admin/administration';
import { EnrollmentCenterComponent } from './admin/enrollment-center';
import { AdminHeaderUserBadgeComponent } from './admin/header/userBadge';

import { AdminNotificationComponent } from './admin/administration/notification';
import { SchoolAdministrationComponent } from './admin/administration/school';
import { StaffComponent } from './admin/administration/staff';
import { StudentComponent } from './admin/administration/student';
import { ClassComponent } from './admin/administration/class';
import { DiscountsComponent } from './admin/administration/discounts';
import { GeneralComponent } from './admin/administration/general';

import { SuperAdminGuard, ParentGuard, AdminGuard } from './security';

@NgModule({
    imports: [
        // NG2
        HttpModule,
        FormsModule,
        RouterModule,
        BrowserModule,
        ReactiveFormsModule,

        // primeng
        DialogModule,
        ButtonModule,
        PasswordModule,
        DropdownModule,
        DataGridModule,
        CheckboxModule,
        InputTextModule,
        DataTableModule,
        MultiSelectModule,
        AutoCompleteModule,
        ConfirmDialogModule,

        // Material2
        MdIconModule,
        MdTabsModule,
        MdCardModule,
        MdListModule,
        MdInputModule,
        MdButtonModule,
        MdSidenavModule,
        MdToolbarModule,
        MdSlideToggleModule,
        MdProgressBarModule,
        MdProgressCircleModule,

        FileUploadModule,

        AppRoutingModule,

    ],
    declarations: [
        // All components go here
        MDLDirective,

        // App components
        AppComponent,
        ModalComponent,
        DropDownComponent,
        DynamicFormQuestionComponent,
        PageNotFoundComponent,

        // parent
        ParentComponent,
        ProfileComponent,
        ChildrenComponent,
        UnenrollComponent,
        DeleteUserComponent,
        ParentHeaderComponent,
        EnrollStudentComponent,
        ResetPasswordComponent,
        InviteFriendsComponent,
        AddPaymentTypeComponent,
        PayTuitionFeesComponent,
        ResendInvitationComponent,
        ManageUserProfileComponent,
        DeletePaymentTypeComponent,
        ManageChildProfileComponent,
        ParentHeaderUserBadgeComponent,

        // login 
        LoginComponent,

        // super admin
        SuperAdminComponent,

        // admin
        AdminComponent,
        PeopleComponent,
        BillingComponent,
        ReportingComponent,
        AdminHeaderComponent,
        NotificationComponent,
        AdminRegisterComponent,
        AdministrationComponent,
        EnrollmentCenterComponent,
        AdminNotificationComponent,
        AdminHeaderUserBadgeComponent,

        // admin admin
        StaffComponent,
        ClassComponent,
        GeneralComponent,
        StudentComponent,
        DiscountsComponent,
        SchoolAdministrationComponent,
    ],

    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        SuperAdminGuard, ParentGuard, AdminGuard,
        NotificationService,
        ParentService,
        LoginService,
        StudentService,
        ApiUrlService,
        SchoolService,
        RecipientService,
        InstitutionService,
        ConfirmationService,
        QuestionControlService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
