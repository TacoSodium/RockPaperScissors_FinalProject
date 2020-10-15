import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { RpsService } from "../../rps.service";
import { delay } from 'rxjs/operators';

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
    of(null).pipe(delay(300)).subscribe(() => {
      this.rpsService.commitSelection(this.selection);
      this.router.navigateByUrl("/display");
    })
  }
}