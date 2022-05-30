import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { PageUsersManagementComponent } from './page-users-management/page-users-management.component';

const routes: Routes = [
  { path: '', component: PageConnectionComponent },
  { path: 'connection', component: PageConnectionComponent },
  { path: 'creator/dashboard', component: DashboardCreatorComponent },
  { path: 'users-management', component: PageUsersManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
