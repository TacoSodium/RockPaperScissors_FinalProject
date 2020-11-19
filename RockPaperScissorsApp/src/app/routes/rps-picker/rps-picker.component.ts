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

  constructor(private gameService: GameService, private rpsService: RpsService, private router: Router) { }

  turn: number;
  noRounds: number = this.gameService.noRounds;

  ngOnInit(): void {
    if (this.noRounds == null) {
      this.router.navigateByUrl("/play");
    } else {
      this.turn = this.rpsService.currentTurn;
    }
  }

  selectOption(option: 'rock' | 'paper' | 'scissors') {
    this.selection = option;
  }

  send() {
    this.rpsService.commitSelection({
      username: this.gameService.username,
      turnNo: this.rpsService.currentTurn,
      playerChoice: this.selection,
    });
  }
}
