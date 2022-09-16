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
import { PageStartgameComponent } from './page-startgame/page-startgame.component';
import { PageGameScoreComponent } from './page-game-score/page-game-score.component';
import { PageGamesToPlayComponent } from './page-games-to-play/page-games-to-play.component';
import { TokenIdentificationService } from './token-identification.service';

@NgModule({  //A class decorator explains the purpose of the class, i.e.,
  //whether a particular class is a component or module.
  // The decorator allows us to define this purpose without putting any code inside the class.
  declarations: [ // components, directives, and pipes that are part of this module
    AppComponent,
    PageConnectionComponent,
    PageUsersManagementComponent,
    DashboardCreatorComponent,
    DashboardUserComponent,
    PagePlaygameComponent,
    PageScenarioBuilderComponent,
    PageQuestionsManagementComponent,
    PageThemesManagementComponent,
    PageGameManagementComponent,
    PageStartgameComponent,
    PageGameScoreComponent,
    PageGamesToPlayComponent
  ],
  imports: [ // other modules, whose classes are needed by components
    //of the module they are being imported into
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
  //  services that are required by components
  providers: [
    // educative.io advice
    TokenIdentificationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  // the main component, or the root component, which starts the whole application.
  //Only the root module (app.module.ts file) can have a bootstrap array.
  bootstrap: [AppComponent]
})
export class AppModule { }

