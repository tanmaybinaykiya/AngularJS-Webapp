import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CarouselModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { LightboxModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { MegaMenuModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { SlideMenuModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { TerminalModule } from 'primeng/primeng';
import { TieredMenuModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { SuperAdminComponent } from './superadmin/superadmin.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';

import { AdministrationComponent } from './admin/administration/administration.component';
import { BillingComponent } from './admin/billing/billing.component';
import { EnrollmentCenterComponent } from './admin/enrollment-center/enrollment-center.component';
import { AdminHeaderComponent } from './admin/header/header.component';
import { AdminHeaderUserBadgeComponent } from './admin/header/userBadge/user-badge.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { PeopleComponent } from './admin/people/people.component';
import { AdminRegisterComponent } from './admin/register/register.component';

import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { JoinTodayComponent } from './login/join-today/join-today.component';

import { ChildrenComponent } from './parent/children/children.component';
import { EnrollStudentComponent } from './parent/children/enroll-student/enroll-student.component';
import { ManageChildProfileComponent } from './parent/children/manage-child-profile/manage-child-profile.component';
import { PayTuitionFeesComponent } from './parent/children/pay-tuition-fees/pay-tuition-fees.component';
import { UnenrollComponent } from './parent/children/unenroll/unenroll.component';
import { ParentHeaderComponent } from './parent/header/header.component';
import { ParentHeaderUserBadgeComponent } from './parent/header/userBadge/user-badge.component';

import { AddPaymentTypeComponent } from './parent/profile/add-payment-type/add-payment-type.component';
import { DeletePaymentTypeComponent } from './parent/profile/delete-payment-type/delete-payment-type.component';
import { DeleteUserComponent } from './parent/profile/delete-user/delete-user.component';
import { InviteFriendsComponent } from './parent/profile/invite-friends/invite-friends.component';
import { ManageUserProfileComponent } from './parent/profile/manage-user-profile/manage-user-profile.component';
import { ProfileComponent } from './parent/profile/profile.component';
import { ResendInvitationComponent } from './parent/profile/resend-invitation/resend-invitation.component';
import { ResetPasswordComponent } from './parent/profile/reset-password/reset-password.component';

import { AppRoutes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        AppRoutes,
    ],
    declarations: [AppComponent,
        LoginComponent,
        SuperAdminComponent,
        AdminComponent,
        ParentComponent,
        ChildrenComponent,
        EnrollmentCenterComponent,
        AdministrationComponent,
        BillingComponent,
        EnrollmentCenterComponent,
        AdminHeaderComponent,
        AdminHeaderUserBadgeComponent,
        NotificationComponent,
        PeopleComponent,
        AdminRegisterComponent,
        ForgotPasswordComponent,
        JoinTodayComponent,
        ChildrenComponent,
        EnrollStudentComponent,
        ManageChildProfileComponent,
        PayTuitionFeesComponent,
        UnenrollComponent,
        ParentHeaderComponent,
        ParentHeaderUserBadgeComponent,
        AddPaymentTypeComponent,
        DeletePaymentTypeComponent,
        DeleteUserComponent,
        InviteFriendsComponent,
        ManageUserProfileComponent,
        ProfileComponent,
        ResendInvitationComponent,
        ResetPasswordComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { };
