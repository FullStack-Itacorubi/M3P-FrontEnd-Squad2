import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistryNotAlowedComponent } from './components/registry-not-alowed/registry-not-alowed.component';
import { DietComponent } from './components/diet/diet.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'register-not-allowed',
    component: RegistryNotAlowedComponent
  },


  {
    path: 'labmedical',
    component: BaseLayoutComponent,
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
        path: 'register',
        component: SignupComponent
        // canActivate: [AuthGuard]
      },
      {
        path: 'diet',
        component: DietComponent
        // canActivate: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
