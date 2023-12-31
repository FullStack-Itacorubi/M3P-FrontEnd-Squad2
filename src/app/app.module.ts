import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgIconsModule } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline';
import * as heroIconsSolid from '@ng-icons/heroicons/solid';
import * as jamIcons from '@ng-icons/jam-icons';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FadeSeparatorComponent } from './components/shared/fade-separator/fade-separator.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { RegistryNotAlowedComponent } from './components/registry-not-alowed/registry-not-alowed.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { RecordsComponent } from './components/records/records.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { DietComponent } from './components/diet/diet.component';
import { MedicationComponent } from './components/medication/medication.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CommonModule } from '@angular/common';
import { PatientRecordComponent } from './components/patient-record/patient-record.component';
import { ExamComponent } from './components/exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseLayoutComponent,
    HomepageComponent, SignupComponent,
    SidebarComponent, FadeSeparatorComponent,
    ToolbarComponent,
    RegistryNotAlowedComponent,
    PatientRegistrationComponent,
    AppointmentComponent,
    ExerciseComponent,
    RecordsComponent,
    DietComponent, 
    MedicationComponent, UserRegistrationComponent,
    PatientRecordComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ...heroIcons, ...heroIconsSolid, ...jamIcons }),
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe, HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule { }

