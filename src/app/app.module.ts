import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { PageUsersManagementComponent } from './page-users-management/page-users-management.component';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { TokenInterceptor } from './token.interceptor';
import { PagePlaygameComponent } from './page-playgame/page-playgame.component';
import { PageScenarioBuilderComponent } from './page-scenario-builder/page-scenario-builder.component';
import { PageQuestionsManagementComponent } from './page-questions-management/page-questions-management.component';
import { PageThemesManagementComponent } from './page-themes-management/page-themes-management.component';
import { PageGameManagementComponent } from './page-game-management/page-game-management.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnectionComponent,
    PageUsersManagementComponent,
    DashboardCreatorComponent,
    DashboardUserComponent,
    PagePlaygameComponent,
    PageScenarioBuilderComponent,
    PageQuestionsManagementComponent,
    PageThemesManagementComponent,
    PageGameManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

