import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { RpsService } from "../../services/rps.service";

@Component({
  selector: 'app-rps-picker',
  templateUrl: './rps-picker.component.html',
  styleUrls: ['./rps-picker.component.css']
})
export class RpsPickerComponent implements OnInit {

  selection?: "rock" | "paper" | "scissors";

  turn: number = this.rpsService.currentTurn;

  constructor(private gameService: GameService, private rpsService: RpsService, private router: Router) { }

  noRounds: number = this.gameService.noRounds;

  ngOnInit(): void {
    if (this.gameService.noRounds == null)
    {
      this.router.navigateByUrl("/play");
    }
  }

  selectOption(option: 'rock' | 'paper' | 'scissors') {
    this.selection = option;
  }

  send() {
      this.rpsService.commitSelection({
        username: this.gameService.username,
        turnNo: this.turn,
        playerChoice: this.selection,
      });
  }
}
