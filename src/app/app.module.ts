import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TheLatestComponent } from './the-latest/the-latest.component';
// import { masterFirebaseConfig } from './api-keys';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
//
// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// };
//
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TheLatestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//     AngularFireModule.initializeApp(firebaseConfig),
//     AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
