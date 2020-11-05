import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { PickRequest } from "../models/SubmitModels"
import { GameService } from './game.service';
import { RoundResponse } from '../models/ResponseModels';

@Injectable({
  providedIn: 'root'
})
export class RpsService {

  private _selection?: string;
  private _currentTurn: number = 1;
  
  get selection() {
    return this._selection;
  }

  get currentTurn() {
    return this._currentTurn;
  }

  constructor(private gameService: GameService, private router: Router, private client: HttpClient) {}

  commitSelection(option: PickRequest) {
    this.client.post<RoundResponse>("http://localhost:5000/rps/pick", option);

    if (this._currentTurn == this.gameService.noRounds)
    {
      this.router.navigateByUrl("/display");
      this._currentTurn = 1;
    }
    else 
    {
      this.router.navigateByUrl("/pick");
      this._currentTurn++;
    }
  }
}
