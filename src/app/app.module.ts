import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { RightsideHeroComponent } from './components/rightside-hero/rightside-hero.component';
import { LeftsideHeroComponent } from './components/leftside-hero/leftside-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadButtonComponent,
    RightsideHeroComponent,
    LeftsideHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
