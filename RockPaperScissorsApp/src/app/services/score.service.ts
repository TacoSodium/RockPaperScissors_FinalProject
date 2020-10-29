import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../models/ScoreModels";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  scores: User[] = [];

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get() {
    this.httpClient.get<User[]>("http://localhost:5000/rps/leaderboard").subscribe((response) => {
      this.scores = response;
    })
  }
}
