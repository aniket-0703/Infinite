import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { EventManageComponent } from './modules/admin/users-manage/event-manage.component';
import { UserManageComponent } from './modules/admin/event-manage/user-manage.component';
import { OtpComponent } from './modules/auth/otp/otp.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgetPassComponent } from './modules/auth/forget-pass/forget-pass.component';
import { DashExampComponent } from './shared/dash-examp/dash-examp.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPassComponent },
  { path: 'user_manage', component: UserManageComponent },
  { path: 'dash_ex', component: DashExampComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
