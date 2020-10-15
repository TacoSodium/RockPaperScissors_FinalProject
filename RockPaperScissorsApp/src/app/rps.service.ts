import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RpsService {

  private _selection?: 'rock' | 'paper' | 'scissors';

  get selection() {
    return this._selection;
  }

  constructor() { }

  commitSelection(option: 'rock' | 'paper' | 'scissors') {
    this._selection = option;
  }
}
