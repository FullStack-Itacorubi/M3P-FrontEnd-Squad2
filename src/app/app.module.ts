import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgIconsModule } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(heroIcons),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
