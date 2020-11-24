import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDisplayComponent } from './routes/report-display/report-display.component';
import { ResultDisplayComponent } from './routes/result-display/result-display.component';
import { RoundPickerComponent } from './routes/round-picker/round-picker.component';
import { RpsPickerComponent } from './routes/rps-picker/rps-picker.component';

const routes: Routes = [
  { path: "play", component: RoundPickerComponent },
  { path: "pick", component: RpsPickerComponent },
  { path: "display", component: ResultDisplayComponent },
  { path: "leaderboard", component: ReportDisplayComponent},

  { path: "**", redirectTo: "play"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
