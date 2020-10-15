import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultDisplayComponent } from './routes/result-display/result-display.component';
import { RpsPickerComponent } from './routes/rps-picker/rps-picker.component';

const routes: Routes = [
  { path: "pick", component: RpsPickerComponent },
  { path: "display", component: ResultDisplayComponent },

  { path: "**", redirectTo: "pick"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
