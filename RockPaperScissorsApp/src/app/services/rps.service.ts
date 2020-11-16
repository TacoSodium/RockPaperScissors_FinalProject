import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { PickRequest } from "../models/SubmitModels"
import { GameService } from './game.service';
import { GameResponse, RoundResponse } from '../models/ResponseModels';

@Injectable({
  providedIn: 'root'
})
export class RpsService {

  private _currentTurn: number = 1;
  private _selection?: string;
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

  constructor(private gameService: GameService, private router: Router, private client: HttpClient) { }

  commitSelection(option: PickRequest) {
    this.client.post<GameResponse>("http://localhost:5000/rps/pick", option)
      .subscribe((response) => {
        this._gameResult = response.result;
      });

    this._currentTurn++;

    if (this.currentTurn > this.gameService.noRounds) {
      this.gameService.commitGameResult(this.gameResult);
      this.router.navigateByUrl("/display");
    } else {
      this.router.navigateByUrl("/pick");
    }
  }
}
