import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIconsModule } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline';
import * as heroIconsSolid from '@ng-icons/heroicons/solid';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FadeSeparatorComponent } from './components/shared/fade-separator/fade-separator.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, FadeSeparatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ...heroIcons, ...heroIconsSolid }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
