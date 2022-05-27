import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageConnectionComponent } from './page-connection/page-connection.component';

const routes: Routes = [
  { path: '', component: PageConnectionComponent },
  { path: 'connection', component: PageConnectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
