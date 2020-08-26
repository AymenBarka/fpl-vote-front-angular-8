import { DetailsSujetComponent } from './modules/details-sujet/details-sujet.component';
import { ListSubjectComponent } from './modules/list-subject/list-subject.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddSubjectComponent } from 'src/app/modules/add-subject/add-subject.component';
import { SondageComponent } from './layouts/sondage/sondage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', component:WelcomeComponent},
  {path : 'auth', component: AuthComponent},
  {path: 'sondage', component: SondageComponent, children :[
    {path : 'addSubject', component: AddSubjectComponent},
    {path : '', component:DashboardComponent},
    {path : 'listSubject', component: ListSubjectComponent},
    {path : 'listSubject/:id/detail-sujet',component:DetailsSujetComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
