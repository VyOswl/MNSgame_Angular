import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreatorComponent } from './dashboard-creator/dashboard-creator.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { PageGameManagementComponent } from './page-game-management/page-game-management.component';
import { PageQuestionsManagementComponent } from './page-questions-management/page-questions-management.component';
import { PageScenarioBuilderComponent } from './page-scenario-builder/page-scenario-builder.component';
import { PageStartgameComponent } from './page-startgame/page-startgame.component';
import { PagePlaygameComponent } from './page-playgame/page-playgame.component';
import { PageThemesManagementComponent } from './page-themes-management/page-themes-management.component';
import { PageUsersManagementComponent } from './page-users-management/page-users-management.component';
import { PageGameScoreComponent } from './page-game-score/page-game-score.component';
import { PageGamesToPlayComponent } from './page-games-to-play/page-games-to-play.component';

const routes: Routes = [
  { path: '', component: PageConnectionComponent },
  { path: 'connection', component: PageConnectionComponent },
  { path: 'creator/dashboard', component: DashboardCreatorComponent },
  { path: 'admin/users-management', component: PageUsersManagementComponent },
  { path: 'creator/scenario-management', component: PageGameManagementComponent },
  { path: 'user/list-game', component: PageGamesToPlayComponent },
  { path: 'user/startgame/:id', component: PageStartgameComponent },
  { path: 'user/playgame/:id', component: PagePlaygameComponent },
  { path: 'creator/scenario/new', component: PageScenarioBuilderComponent },
  { path: 'admin/questions-management', component: PageQuestionsManagementComponent },
  { path: 'creator/theme-management', component: PageThemesManagementComponent },
  { path: 'user/results/scenario/:id', component: PageGameScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
