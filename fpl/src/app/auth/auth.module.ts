import { AuthComponent } from './auth.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  entryComponents: [LoginComponent,RegisterComponent],
})
export class AuthModule { }
