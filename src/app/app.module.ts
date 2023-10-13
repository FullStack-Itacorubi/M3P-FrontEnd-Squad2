import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseLayoutComponent,
    HomepageComponent, SignupComponent,
    SidebarComponent, FadeSeparatorComponent,
    ToolbarComponent,
    RegistryNotAlowedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ...heroIcons, ...heroIconsSolid, ...jamIcons }),
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule { }

