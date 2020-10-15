import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpsService } from "../../rps.service";

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  constructor(public rpsService: RpsService, private router: Router) {
    this.rpsService.selection;
  }

  ngOnInit(): void {
    if (this.rpsService.selection == null) {
      this.router.navigateByUrl("/pick");
    }
  }

  playAgain() {
    this.router.navigateByUrl("/pick");
  }

}
