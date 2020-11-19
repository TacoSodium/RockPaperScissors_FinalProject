import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PlayRequest } from '../models/SubmitModels';
import { GameResponse } from '../models/ResponseModels';
import { Round } from '../models/Round';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _username?: string;
  private _roundSelection?: number;

  usernameWarning?: boolean = false;

  get username() {
    return this._username;
  }

  get noRounds() {
    return this._roundSelection;
  }

  constructor(private router: Router, private client: HttpClient) { }

  commitUsername(username: string) {
    this._username = username;
  }

  commitRoundSelection(option: PlayRequest) {
    this.client.post<GameResponse>("http://localhost:5000/rps", option)
      .subscribe((response) => {
        this._username = response.username,
          this._roundSelection = response.noTurns,
          this.router.navigateByUrl("/pick");
      })
  }
}
