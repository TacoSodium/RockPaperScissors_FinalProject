import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDisplayComponent } from './routes/report-display/report-display.component';
import { ResultDisplayComponent } from './routes/result-display/result-display.component';
import { RpsPickerComponent } from './routes/rps-picker/rps-picker.component';

const routes: Routes = [
  { path: "pick", component: RpsPickerComponent },
  { path: "display", component: ResultDisplayComponent },
  { path: "leaderboard", component: ReportDisplayComponent},

  { path: "**", redirectTo: "pick"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
