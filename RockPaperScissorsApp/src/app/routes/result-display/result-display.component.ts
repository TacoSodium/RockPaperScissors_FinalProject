import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsService } from 'src/app/services/rps.service';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  constructor(public rpsService: RpsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  playAgain() {
    this.rpsService.resetTurns();
    this.router.navigateByUrl("/play");
  }

}