import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsService } from "../../services/rps.service";

@Component({
  selector: 'app-rps-picker',
  templateUrl: './rps-picker.component.html',
  styleUrls: ['./rps-picker.component.css']
})
export class RpsPickerComponent implements OnInit {

  selection?: "rock" | "paper" | "scissors";

  constructor(private rpsService: RpsService, private router: Router) { }

  ngOnInit(): void {
  }

  selectOption(option: 'rock' | 'paper' | 'scissors') {
    this.selection = option;
  }

  send() {
    if (this.rpsService.username == null) {
      alert("Please enter a username")
    }
    else {
      this.rpsService.commitSelection({
        username: this.rpsService.username,
        playerChoice: this.selection
      });
    }
  }
}
