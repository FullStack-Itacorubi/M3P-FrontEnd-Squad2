import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistryNotAlowedComponent } from './components/registry-not-alowed/registry-not-alowed.component';
import { RecordsComponent } from './components/records/records.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { DietComponent } from './components/diet/diet.component';
import { MedicationComponent } from './components/medication/medication.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { PatientRecordComponent } from './components/patient-record/patient-record.component';
import { privateChildGuard } from './guards/auth.guard';
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'register-not-allowed',
    component: RegistryNotAlowedComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'labmedical',
    component: BaseLayoutComponent,
    canActivateChild: [privateChildGuard],
    children: [
      {
        path: '',
        redirectTo: '/labmedical/homepage',
        pathMatch: 'full',
      },
      {
        path: 'homepage',
        component: HomepageComponent,
      },
      {
        path: 'records',
        component: RecordsComponent,
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'patient-registration',
        component: PatientRegistrationComponent,
      },
      {
        path: 'user-registration',
        component: UserRegistrationComponent,
      },
      {
        path: 'exercise',
        component: ExerciseComponent,
      },
      {
        path: 'diet',
        component: DietComponent,
      },
      {
        path: 'exam',
        component: ExamComponent,
      },
      {
        path: 'medication',
        component: MedicationComponent,
      },
      {path: 'patient-record/:id',
      component: PatientRecordComponent
        // canActivate: [AuthGuard]
      },
      {
        path: '**',
        component: LoginComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
