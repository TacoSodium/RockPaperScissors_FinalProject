import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsPickerComponent } from './routes/rps-picker/rps-picker.component';
import { ResultDisplayComponent } from './routes/result-display/result-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsPickerComponent,
    ResultDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
