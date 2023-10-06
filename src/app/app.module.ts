import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIconsModule } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, BaseLayoutComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(heroIcons),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
