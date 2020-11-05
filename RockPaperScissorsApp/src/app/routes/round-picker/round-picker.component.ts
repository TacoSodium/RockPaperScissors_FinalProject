import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-round-picker',
  templateUrl: './round-picker.component.html',
  styleUrls: ['./round-picker.component.css']
})
export class RoundPickerComponent implements OnInit {

  roundSelection?: 1 | 3 | 5;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  selectOption(option: 1 | 3 | 5) {
    this.roundSelection = option;
  }

  send() {
    if (this.gameService.username == null) {
      alert("Please enter a username")
    }
    else {
      this.gameService.commitRoundSelection({
        username: this.gameService.username,
        roundChoice: this.roundSelection
      });
    }
  }

}
