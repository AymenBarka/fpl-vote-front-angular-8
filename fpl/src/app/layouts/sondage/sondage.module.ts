import { DetailsSujetComponent } from './../../modules/details-sujet/details-sujet.component';
import { ListSubjectComponent } from './../../modules/list-subject/list-subject.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { AddSubjectComponent } from 'src/app/modules/add-subject/add-subject.component';
import { RouterModule } from '@angular/router';
import { SondageComponent } from './sondage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    SondageComponent,
    AddSubjectComponent,
    DashboardComponent,
    ListSubjectComponent,
    DetailsSujetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule

  ]
})
export class SondageModule { }
