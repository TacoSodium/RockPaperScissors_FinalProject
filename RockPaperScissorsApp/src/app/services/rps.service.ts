import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { PickRequest } from "../models/SubmitModels"
import { GameService } from './game.service';
import { GameResponse } from '../models/ResponseModels';
import { Round } from '../models/Round';

@Injectable({
  providedIn: 'root'
})
export class RpsService {

  private _currentTurn: number = 1;
  private _selection?: string;
  public _rounds?: Round[] = [];
  private _gameResult?: string;

  get selection() {
    return this._selection;
  }

  get currentTurn() {
    return this._currentTurn;
  }

  get gameResult() {
    return this._gameResult;
  }

  get rounds() {
    return this._rounds;
  }

  constructor(private gameService: GameService, private router: Router, private client: HttpClient) {
    this.client = client
   }

  commitSelection(option: PickRequest) {
    this.client.post<GameResponse>("http://localhost:5000/rps/pick", option)
      .subscribe((response) => {
        this._currentTurn++;

        if (this.currentTurn > this.gameService.noRounds) {
          this._rounds = response.rounds;
          this._gameResult = response.result;

          console.log(this.gameResult);

          this.resetTurns();
          
          this.router.navigateByUrl("/display");
        } else {
          this.router.navigateByUrl("/pick");
        }
      });
  }

  resetTurns() {
    this._currentTurn = 1;
  }
}
