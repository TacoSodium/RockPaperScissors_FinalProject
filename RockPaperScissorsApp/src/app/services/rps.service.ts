import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { SubmitRequestModel, SubmitResponeModel } from "../models/SubmitModels"

@Injectable({
  providedIn: 'root'
})
export class RpsService {

  private _selection?: string;
  private _username?: string;

  get selection() {
    return this._selection;
  }

  get username() {
    return this._username;
  }

  cpuChoice: string;
  result: string;

  constructor(private router: Router, private client: HttpClient) { }

  commitUsername(username: string){
    this._username = username;
  }

  commitSelection(option: SubmitRequestModel) {
    this.client.post<SubmitResponeModel>("http://localhost:5000/rps", option)
      .subscribe((response) => {
        this._username = response.username,
        this._selection = response.playerChoice,
        this.cpuChoice = response.cpuChoice,
        this.result = response.result,
        this.router.navigateByUrl("/display");
      })
  }
}
