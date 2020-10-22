import { Injectable } from '@angular/core';
import { Score } from "../models/Score";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  scores: Score[] = [
    new Score("BobFrank", 40, 300),
    new Score("BobRank", 5, 3000),
    new Score("BobDrank", 70, 4)
  ];
}
