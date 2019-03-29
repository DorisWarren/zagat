import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { TheLatestComponent } from './the-latest/the-latest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    TheLatestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
