import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RpsService } from './services/rps.service';
import { ScoreService } from './services/score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RockPaperScissorsApp';
  username?: string;

  playing: boolean = true;

  constructor(private rpsService: RpsService, private scoreService: ScoreService, private router: Router) { }

  toggleReports() {
    if (this.playing) {
      this.router.navigateByUrl("/leaderboard");
      this.scoreService.get();
      this.playing = false;
    }
    else
    {
      this.router.navigateByUrl("/pick");
      this.playing = true;
    }
  }

  setUsername(event: any) {
    this.username = event.target.value;
    this.rpsService.commitUsername(event.target.value);
  }
}
