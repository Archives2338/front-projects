import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectTaskComponent } from './pages/project-task/project-task.component';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './components/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { SharedModule } from '../shared/shared.module';
import { CreateModalTaskComponent } from './components/modals/create-modal-task/create-modal-task.component';
import { InfoModalTaskComponent } from './components/modals/info-modal-task/info-modal-task.component';
import { CreateProjectTaskComponent } from './components/modals/create-project-task/create-project-task.component';

const mat_modules = [
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatDialogModule,

  MatTooltipModule,
  MatAutocompleteModule,

  NgxPaginationModule,

  MatSnackBarModule

];

@NgModule({
  declarations: [
    HomeComponent,
    DrawerComponent,
    ProjectsComponent,
    ProjectTaskComponent,
    DashboardComponent,
    TableComponent,
    CreateModalTaskComponent,
    InfoModalTaskComponent,
    CreateProjectTaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    mat_modules,
    SharedModule
  ]
})
export class DashboardModule { }
