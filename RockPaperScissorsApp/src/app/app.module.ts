import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsPickerComponent } from './routes/rps-picker/rps-picker.component';
import { ResultDisplayComponent } from './routes/result-display/result-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportDisplayComponent } from './routes/report-display/report-display.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { RoundPickerComponent } from './routes/round-picker/round-picker.component';
import { RoundResultComponent } from './components/round-result/round-result.component';
import { RoundResultListComponent } from './components/round-result-list/round-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsPickerComponent,
    ResultDisplayComponent,
    ReportDisplayComponent,
    ScoreComponent,
    ScoreListComponent,
    RoundPickerComponent,
    RoundResultComponent,
    RoundResultListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
