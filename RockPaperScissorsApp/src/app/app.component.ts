import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './services/game.service';
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

  constructor(private gameService: GameService, private rpsSrevice: RpsService, private router: Router) { }

  toggleReports() {
    if (this.playing) {
      this.router.navigateByUrl("/leaderboard");
      this.playing = false;
    }
    else
    {
      this.rpsSrevice.resetTurns();
      this.router.navigateByUrl("/play");
      this.playing = true;
    }
  }

  setUsername(event: any) {
    this.username = event.target.value;
    this.gameService.commitUsername(event.target.value);
  }
}
